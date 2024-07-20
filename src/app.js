import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import userRoutes from './routers/userRouter.js';
import brandRoutes from './routers/brandRouter.js';
import productRoutes from './routers/productRouter.js';
import billRoutes from './routers/billRouter.js';
import Bill from './models/billModel.js';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/user', userRoutes);
app.use('/brand', brandRoutes);
app.use('/bill', billRoutes);
app.use('/product', productRoutes);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error('MongoDB connection error:', error));

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // Emit sales report data in real-time
    socket.on('getSalesReport', async () => {
        try {
            const bills = await Bill.find();
            const totalSales = bills.reduce((sum, bill) => sum + bill.total, 0);
            io.emit('salesReport', { totalSales, bills });
        } catch (error) {
            console.error('Error fetching sales report:', error);
        }
    });
});

const PORT = process.env.APPLICATION_PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
