const { Htwarriors } = require('../models/htwarriors');


const updateLikeValue = async (req,res) => {
    try{
        const document = await Htwarriors.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true });
        res.json({ count: document.count });
    }
    catch
    {
        console.error('Error updating like value:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

const getLikeValue = async (req,res) => {
    try {
        const document = await Htwarriors.findOne({});
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error getting like value:', error);
        res.status(500).json({ message: 'Server error' });
    }
    
};

module.exports = { updateLikeValue,getLikeValue}