const fs = require("fs")
const path = require("path")
const { v4: uuid } = require("uuid")

const User = require("../models/userModel.js")
const Post = require("../models/postModel.js")
const HttpError = require("../models/errorModel")

// ==================== CREATE A POST ========================
// POST: api/posts
// PROTECTED
const createPost = async (req, res, next) => {
    try {
        let { title, category, description } = req.body
        if (!title || !description || !category || !req.files) {
            return next(
                new HttpError("Fill in all fields and choose thumbnail.", 422)
            )
        }

        const { thumbnail } = req.files
        //check the file size
        if (thumbnail.size > 2000000) {
            return next(
                new HttpError(
                    "Thumbnail too big. File should be less than 2mb."
                )
            )
        }

        let fileName = thumbnail.name
        let splittedFileName = fileName.split(".")
        let newFileName =
            splittedFileName[0] +
            uuid() +
            "." +
            splittedFileName[splittedFileName.length - 1]
        thumbnail.mv(
            path.join(__dirname, "..", "..", "/uploads", newFileName),
            async (err) => {
                if (err) {
                    return next(new HttpError(err))
                } else {
                    const newPost = await Post.create({
                        title,
                        category,
                        description,
                        thumbnail: newFileName,
                        creator: req.user.id,
                    })

                    if (!newPost) {
                        return next(
                            new HttpError("Post couldn't be created.", 422)
                        )
                    }

                    // find user and increase post count
                    const currentUser = await User.findById(req.user.id)
                    const userPostCount = currentUser.posts + 1
                    await User.findByIdAndUpdate(req.user.id, {
                        posts: userPostCount,
                    })

                    res.status(201).json(newPost)
                }
            }
        )
    } catch (error) {
        return next(new HttpError(error))
    }
}

// ==================== GET ALL POSTS ========================
// GET: api/posts
// UNPROTECTED
const getPosts = async (req, res, next) => {
    try {
        const posts = await Post.find().sort({ updatedAt: -1 })
        res.status(200).json(posts)
    } catch (error) {
        return next(new HttpError(error))
    }
}

// ==================== GET SINGLE POSTS ========================
// GET: api/posts/:id
// UNPROTECTED
const getPost = async (req, res, next) => {
    try {
        const postId = req.params.id
        const post = await Post.findById(postId)
        if (!post) {
            return next(new HttpError("Post not found.", 404))
        }

        res.status(200).json(post)
    } catch (error) {
        return next(new HttpError(error))
    }
}

// ==================== GET POSTS BY CATEGORY ========================
// GET: api/posts/categories/:category
// UNPROTECTED
const getCatPosts = async (req, res, next) => {
    try {
        const { category } = req.params
        const catPosts = await Post.find({ category }).sort({ createdAt: -1 })
        res.status(200).json(catPosts)
    } catch (error) {
        return next(new HttpError(error))
    }
}

// ==================== GET POSTS BY AUTHORS ========================
// GET: api/posts/users/:id
// UNPROTECTED
const getUserPosts = async (req, res, next) => {
    try {
        const { id } = req.params
        const posts = await Post.find({ creator: id }).sort({ createdAt: -1 })
        res.status(200).json(posts)
    } catch (error) {
        return next(new HttpError(error))
    }
}

// ==================== EDIT POST ========================
// PATCH: api/posts/:id
// PROTECTED
const editPost = async (req, res, next) => {
    try {
        let fileName
        let newFileName
        let updatedPost
        const postId = req.params.id

        let { title, category, description } = req.body
        if (!title || !category || description.length < 12) {
            return next(new HttpError("Fill in all fields.", 422))
        }

        if (!req.files) {
            updatedPost = await Post.findByIdAndUpdate(
                postId,
                { title, category, description },
                { new: true }
            )
        } else {
            // get old post from DB
            const oldPost = await Post.findById(postId)
            //delete old thumbnail from uploads
            fs.unlink(
                path.join(__dirname, "..", "..", "uploads", oldPost.thumbnail),
                async (err) => {
                    if (err) {
                        return next(new HttpError(err))
                    }
                }
            )

            // upload new thumbnail
            const { thumbnail } = req.files
            // check file size
            if (thumbnail.size > 2000000) {
                return next(
                    new HttpError("Thumbnail too big. Should be less than 2mb.")
                )
            }
            fileName = thumbnail.name
            let splittedFileName = fileName.split(".")
            newFileName =
                splittedFileName[0] +
                uuid() +
                "." +
                splittedFileName[splittedFileName.length - 1]

            thumbnail.mv(
                path.join(__dirname, "..", "..", "/uploads", newFileName),
                async (err) => {
                    if (err) {
                        return next(new HttpError(err))
                    }
                }
            )

            updatedPost = await Post.findByIdAndUpdate(
                postId,
                {
                    title,
                    category,
                    description,
                    thumbnail: newFileName,
                },
                { new: true }
            )
        }

        if (!updatedPost) {
            return next(new HttpError("Couldn't update post.", 400))
        }

        res.status(200).json(updatedPost)
    } catch (error) {
        return next(new HttpError(error))
    }
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
