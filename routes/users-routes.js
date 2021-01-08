const express = require('express')
const { check } = require('express-validator')

const usersController = require('../controllers/users-controller')
const fileUpload = require('../middleware/file-upload')

const users = express.Router()

users.get('/', usersController.getUsers )

users.post('/signup',
    fileUpload.single('image'),
    [
        check('name')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail()
            .isEmail(),
        check('password').isLength({min: 6})
    ],
 usersController.signup)

users.post('/login', usersController.login)


module.exports = users