const express = require("express")
const cors = require("cors")
const { connect } = require("mongoose")
require("dotenv").config()

const userRoutes = require("./routes/userRoutes.js")
const postRoutes = require("./routes/postRoutes.js")

const port = process.env.PORT
const app = express()

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: "http://localhost:5173" }))

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

connect(process.env.MONGO_URI)
    .then(app.listen(port, () => console.log(`Server running on port ${port}`)))
    .catch((error) => {
        console.log(error)
    })
