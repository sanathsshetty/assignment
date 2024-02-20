const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const { validateAuthorId } = require('../middleware/authMiddleware');

router.get('/', blogController.getAllBlogs);
router.post('/', blogController.createBlog);
router.get('/:authorId', validateAuthorId, blogController.getBlogByAuthorId);

module.exports = router;
