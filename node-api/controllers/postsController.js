const Post = require('../models/post')
const { validationResult } = require('express-validator');

exports.getPosts = (req, res) =>
{
    Post.find()
        .select("_id title body")
        .then(posts =>
        {
            res.status(200).json({ posts })
        })
        .catch(err =>
        {
            res.status(400).json({ err })
        })
}

exports.createPost = async (req, resp) =>
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        return resp.status(400).json({ errors: errors.array() });
    }

    const post = new Post(req.body)
    post.markModified('title')
    await post.save()
        .then(
            savedPost =>
            {
                resp.status(201).json({ post: savedPost })
            },
            err =>
            {
                if (err)
                {
                    return resp.status(400).json(err)
                }
            })
}