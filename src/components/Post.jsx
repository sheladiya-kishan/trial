import React from 'react'
import { useLoaderData } from 'react-router-dom'


const Post = () => {
    const post = useLoaderData();

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <a href="/">back to Posts</a>
        </div>
    )
}

export default Post