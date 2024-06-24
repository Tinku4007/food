const express = require("express");
const User = require("../model/User");

const router = express.Router();

router.post("/createuser", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }


        const newUser = new User({
            name,
            email,
            password,
        });

        const response = await newUser.save();
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

module.exports = router;
