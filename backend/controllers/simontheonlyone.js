const { Simontheonlyone} = require('../models/simontheonlyone');



const updateLikeValue = async (req,res) => {
    try{
        const document = await Simontheonlyone.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true });
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
        const document = await Simontheonlyone.findOne({});
        res.json({ count: document.count });
    } catch (error) {
        console.error('Error getting like value:', error);
        res.status(500).json({ message: 'Server error' });
    }
    
};

module.exports = { updateLikeValue,getLikeValue}
