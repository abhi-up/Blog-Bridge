const User = require("../models/userModel.js")
const HttpError = require("../models/errorModel")

// ==================== CREATE A POST ========================
// POST: api/posts
// PROTECTED
const createPost = async (req, res, next) => {
    res.json("Create Post")
}

// ==================== GET ALL POSTS ========================
// GET: api/posts
// UNPROTECTED
const getPosts = async (req, res, next) => {
    res.json("Get all posts")
}

// ==================== GET SINGLE POSTS ========================
// GET: api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
    res.json("Get single posts")
}

// ==================== GET POSTS BY CATEGORY ========================
// GET: api/posts/categories/:category
// UNPROTECTED
const getCatPosts = async (req, res, next) => {
    res.json("Get posts by category")
}

// ==================== GET POSTS BY AUTHORS ========================
// GET: api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
    res.json("Get user posts")
}

// ==================== EDIT POST ========================
// PATCH: api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
    res.json("Edit Post")
}

// ==================== DELETE POST ========================
// DELETE: api/posts/:id
// PROTECTED
const deletePost = async (req, res, next) => {
    res.json("Delete Post")
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    getCatPosts,
    getUserPosts,
    editPost,
    deletePost,
}
