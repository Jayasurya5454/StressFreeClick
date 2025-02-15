const express = require('express');
const app = express();
const connectDB = require('./connections/dbconnect');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
connectDB();
const cron = require('node-cron');

cron.schedule('*/7 * * * *', () => {
    console.log('Healthy');
});
app.use('/api/barisdogonsutcu', require('./routes/barisdogonsutcu.js'));
app.use('/api/htwarriors', require('./routes/htwarriors.js'));
app.use('/api/simontheonlyone', require('./routes/simontheonlyone.js'));
app.use('/api/souravbandyopadhyay', require('./routes/souravBandyopadhyay.js'));
app.use('/api/trayrandall', require('./routes/trayRandall.js'));
app.use('/api/portfolio',require('./routes/portfolio.js'))
app.use('/api/snapurl',require('./routes/snapurl.js'))
app.get('/api/status', (req, res) => {
    res.json({ status: 'ready' });
  });
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
