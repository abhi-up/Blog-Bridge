// ==================== REGISTER A NEW USER ========================
// POST: api/users/register
// UNPROTECTED
const registerUser = (req, res, next) => {
    res.json("register user")
}

// ==================== LOGIN A REGISTERED USER ========================
// POST: api/users/login
// UNPROTECTED
const loginUser = (req, res, next) => {
    res.json("login user")
}

// ==================== USER PORFILE ========================
// POST: api/users/:id
// PROTECTED
const getUser = (req, res, next) => {
    res.json("get user")
}

// ==================== CHANGE USER AVATAR ========================
// POST: api/users/change-avatar
// PROTECTED
const changeAvatar = (req, res, next) => {
    res.json("change user avatar")
}

// ==================== EDIT USER DETAILS ========================
// POST: api/users/edit-user
// PROTECTED
const editUser = (req, res, next) => {
    res.json("edit user details")
}

// ==================== GET AUTHORS ========================
// POST: api/users/authors
// UNPROTECTED
const getAuthors = (req, res, next) => {
    res.json("get all authors/users")
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    changeAvatar,
    editUser,
    getAuthors,
}
