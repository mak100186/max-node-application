const express = require('express')
const { getPosts, createPost } = require('../controllers/postsController')
const { postValidations } = require('../helpers/validations')

const router = express.Router()

router.get("/", getPosts)
router.post("/post", postValidations, createPost)

module.exports = router;
