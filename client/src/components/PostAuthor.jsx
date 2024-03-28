import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const PostAuthor = ({ authorID, createdAt }) => {
    const [author, setAuthor] = useState({})

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const response = await axios.get(`/api/users/${authorID}`)
                setAuthor(response?.data)
            } catch (error) {
                console.log(error)
            }
        }

        getAuthor()
    }, [authorID])

    // Convert createdAt to Date object
    const createdDate = new Date(createdAt)

    // Format date as "date/month/year"
    const formattedDate = createdDate.toLocaleDateString("en-GB")

    return (
        <Link to={`/posts/users/${authorID}`} className="post__author">
            <div className="post__author-avatar">
                <img src={`/uploads/${author?.avatar}`} alt="" />
            </div>
            <div className="post__author-details">
                <h5>By: {author?.name}</h5>
                <small>{formattedDate}</small>
            </div>
        </Link>
    )
}

export default PostAuthor
