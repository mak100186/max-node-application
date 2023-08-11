const { check } = require('express-validator');

exports.postValidations = [
    check("title", "Title is required").notEmpty(),
    check("title", "Title must be between 4 to 15 characters").isLength({
        min: 4,
        max: 150
    }),

    check("body", "Body is required").notEmpty(),
    check("body", "Body must be between 4 to 2000 characters").isLength({
        min: 4,
        max: 2000
    })
]