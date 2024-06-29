const express = require('express');
const router = express.Router();
const Order = require('../model/Orders'); // Adjust the path as per your file structure

router.post('/order_Data', async (req, res) => {
    try {
        let data = req.body.order_Data;
        data.unshift({ Order_date: req.body.order_date });

        let existingOrder = await Order.findOne({ email: req.body.email });

        if (!existingOrder) {
            await Order.create({
                email: req.body.email,
                order_Data: [data]
            });
            return res.json({ success: true });
        } else {
            try {
                await Order.findOneAndUpdate({ email: req.body.email },
                    { $push: { order_Data: data } }).then(()=>{
                        res.json({success:true})
                    })
            } catch (error) {
                console.log(error)
                res.json({success:true})
            }
        }
    } catch (error) {
        console.error('Error in order_Data route:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

module.exports = router;
