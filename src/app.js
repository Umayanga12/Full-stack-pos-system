const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routers/dashboardroutes');
const http = require('http');
const { Server } = require('socket.io');
require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.json());
app.use('/api', routes);

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    // Emit sales report data in real-time
    socket.on('getSalesReport', async () => {
        const bills = await Bill.find();
        const totalSales = bills.reduce((sum, bill) => sum + bill.total, 0);
        io.emit('salesReport', { totalSales, bills });
    });
});

server.listen(process.env.APPLICATION_PORT, () => {
    console.log('Server is running on port 3000');
});
