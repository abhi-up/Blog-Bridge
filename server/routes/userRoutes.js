const { Router } = require("express")

const {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors,
} = require("../controllers/userControllers.js")
const authMiddleware = require("../middlewares/authMiddleware.js")

const router = Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/:id", getUser)
router.get("/", getAuthors)
router.post("/change-avatar", authMiddleware, changeAvatar)
router.patch("/edit-user", authMiddleware, editUser)

module.exports = router
