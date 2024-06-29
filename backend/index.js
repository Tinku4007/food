const express = require("express")
const app = express()
const cors = require("cors")
const mongooseDB = require("./config/db")
const router = require("./routes/CreateUser")
const port = 5000
app.use(cors())
app.use(express.json())

mongooseDB()
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', router)
app.use("/api", require("./routes/DisplayData"))
app.use("/api", require("./routes/OrderData"))

app.listen(port, () => {
    console.log("Server running on port 5000")
})