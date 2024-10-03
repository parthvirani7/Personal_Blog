import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

const EditPost = () => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const history = useHistory();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setTitle(response.data.title);
            setContent(response.data.content);
        };
        fetchPost();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/api/posts/${id}`, { title, content });
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Edit Post</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
            />
            <button type="submit">Update</button>
        </form>
    );
};

export default EditPost;
