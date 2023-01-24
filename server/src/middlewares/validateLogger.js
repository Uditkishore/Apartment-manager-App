const { body, validationResult } = require("express-validator");


const validateRegistration = [
    body("name")
        .isLength({ min: 1 })
        .withMessage("Name is required"),
    body("email")
        .isEmail()
        .withMessage("Email is required"),
    body("password")
        .isLength({ min: 1 })
        .withMessage("Password is required"),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next();
    }
];

const validateLogin = [
    body('email')
        .exists()
        .isEmail().withMessage('email is incorrect')
        .trim(),
    body('password')
        .exists()
        .isString()
        .isLength({ min: 5 }).withMessage('Min length of password should be more than 5 characters'),
    function (req, res, next) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

        next()
    }
];

module.exports = {
    validateRegistration,
    validateLogin
}