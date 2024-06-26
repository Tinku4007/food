const express = require("express");
const User = require("../model/User");
const bcrypt = require('bcrypt');
const router = express.Router();
const jwt = require("jsonwebtoken");
const JwtSecretKey = "secretkey";
const saltRounds = 10;

router.post("/createuser", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const hash = bcrypt.hashSync(password, saltRounds);
        const newUser = new User({
            name,
            email,
            password: hash
        });

        const response = await newUser.save();
        res.status(200).json({ success: true, data: response });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});

router.post("/loginuser", async (req, res) => {
    const { email, password } = req.body;
    try {
        const userData = await User.findOne({ email })
        if (!userData) {
            return res.status(404).json({ success: false, message: "User not found" })
        }
        const isMtach = await bcrypt.compare(password, userData.password)
        if (!isMtach) {
            return res.status(400).json({ success: false, message: "Invalid credentials passowrd" })
        }
        const payload = {
            userId: userData.id
        }
        const token = jwt.sign(payload, JwtSecretKey);
        res.status(200).json({ success: true, token: token })

    } catch (error) {
        console.log(error)
        res.status(200).json({ success: false })
    }
})



module.exports = router;
