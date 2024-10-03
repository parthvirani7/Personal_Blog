import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(response.data);
        };
        fetchPost();
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to={`/edit/${post._id}`}>Edit</Link>
        </div>
    );
};

export default PostDetail;
