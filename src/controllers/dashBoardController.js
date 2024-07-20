import Bill from '../models/billModel';

require('dotenv').config();

const getSalesReport = async (req, res) => {
    const bills = await Bill.find();
    const totalSales = bills.reduce((sum, bill) => sum + bill.total, 0);
    res.send({ totalSales, bills });
};


export {
    getSalesReport,
};
