const Post = require('../models/post')

exports.getPosts = (req, res) =>
{
    res.status(200).json({
        posts: [
            { title: 'First post' },
            { title: 'Second post' }
        ]
    })
}

exports.createPost = async (req, resp) =>
{
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