const express = require("express")
const User = require("../model/User")

const router = express.Router()
router.post("/createuser", async (req, res) => {
    try {
        await User.create({
            name: "tinku",
            email: "tinku@gmail.com",
            password: "123123"
        })
        res.json({ success: true });
    } catch (error) {
        console.log(error)
        res.json({ success: false })
    }
})

module.exports = router