const express = require("express");
const User = require("../model/User");
const mongoose = require('mongoose');
const router = express.Router();

router.get("/foodData", async (req, res) => {
    try {
        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const foodCategory = await mongoose.connection.db.collection("food_category").find({}).toArray();
        res.status(200).json({ success: true, foodItems: fetchedData, foodCategory: foodCategory })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;