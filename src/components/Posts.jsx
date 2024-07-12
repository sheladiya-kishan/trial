import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            {console.log(posts)}
          <h1>Posts</h1>
          <ul>
            {posts.map(post => (
              <li key={post.id}>
                <a href={`/posts/${post.id}`}>{post.title}</a>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default Posts