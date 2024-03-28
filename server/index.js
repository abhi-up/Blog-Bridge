const express = require("express")
const cors = require("cors")
const helmet = require("helmet")
const compression = require("compression")
const { connect } = require("mongoose")
require("dotenv").config()
const upload = require("express-fileupload")
const path = require("path")

const userRoutes = require("./routes/userRoutes.js")
const postRoutes = require("./routes/postRoutes.js")
const { notFound, errorHandler } = require("./middlewares/errorMiddleware.js")

const port = process.env.PORT || 5000
const app = express()

app.use((req, res, next) => {
    res.setHeader(
        "Content-Security-Policy",
        "default-src 'self'; connect-src 'self' http://localhost:5000;"
    )
    next()
})

const allowedOrigins = [
    "http://localhost:5173",
    "https://your-production-frontend-url.com",
]

app.use(express.json({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(cors({ credentials: true, origin: allowedOrigins }))
app.use(helmet())
app.use(compression())
app.use(upload())
app.use("/uploads", express.static(__dirname + "/uploads"))

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

app.use(express.static(path.join(__dirname, "..", "client/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/../client/dist/index.html"))
})

app.use(notFound)
app.use(errorHandler)

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

process.on("SIGINT", () => {
    console.log("Shutting down gracefully...")
    server.close(() => {
        console.log("Server has been shut down")
        process.exit(0)
    })
})

connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => {
        console.log(error)
        process.exit(1)
    })
