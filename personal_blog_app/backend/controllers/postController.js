const Post = require('../models/postModel');

// Create a new post
exports.createPost = async (req, res) => {
    const { title, content } = req.body;
    const post = new Post({ title, content });
    try {
        await post.save();
        res.status(201).json(post);
    } catch (error) {
        res.status(400).json({ message: 'Failed to create post', error });
    }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch posts', error });
    }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: 'Failed to fetch post', error });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json({ message: 'Failed to update post', error });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) return res.status(404).json({ message: 'Post not found' });
        res.status(204).json();
    } catch (error) {
        res.status(400).json({ message: 'Failed to delete post', error });
    }
};
