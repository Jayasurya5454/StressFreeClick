const express = require('express');
const app = express();
const connectDB = require('./connections/dbconnect');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use('/api/barisdogonsutcu', require('./routes/barisdogonsutcu.js'));
app.use('/api/htwarriors', require('./routes/htwarriors.js'));
app.use('/api/simontheonlyone', require('./routes/simontheonlyone.js'));
app.use('/api/souravbandyopadhyay', require('./routes/souravBandyopadhyay.js'));
app.use('/api/trayrandall', require('./routes/trayRandall.js'));

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
