const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

// CRUD routes for posts
router.post('/', postController.createPost);
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

module.exports = router;
