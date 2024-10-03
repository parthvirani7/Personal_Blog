import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/posts'); 
                setPosts(res.data);
            } catch (err) {
                console.error('Failed to fetch posts', err);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="container">
            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <div className="post" key={post._id}>
                        <h2>{post.title}</h2>
                        <p className="date">{new Date(post.createdAt).toLocaleDateString()}</p>
                        <p>{post.content}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default BlogPosts;
