const router = require("express").Router();
const Blog = require('../models/blog')
const auth = require('../middleware/auth_middleware')



router.get('/allPosts', async (req, res) => {
    try {
        const fetchAllBlogs = await Blog.find({});
        res.status(200).json(fetchAllBlogs)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

router.post('/addBlog', auth, async (req, res) => {
    try {
        const { title, category, description } = req.body;
        if (!title || !description || !category) {
            return res.status(400).json({ message: "All fields are required" })
        }
        const addBlog = new Blog({
            title: title,
            category: category,
            description: description,
            user: req.user._id
        })
        const savedBlog = await addBlog.save();
        res.json({ message: "Blog added sucessfully" })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

router.get('/single/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const fetchBlogsbyID = await Blog.findById(id)
        return res.status(200).json({ fetchBlogsbyID })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

module.exports = router;