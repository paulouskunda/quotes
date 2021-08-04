const express = require('express')
const userController = require('../controller/userController')

const router = express.Router()

router.get('/login', userController.userLogin)
router.get('/signup', userController.userSign)
router.post('/register', userController.userRegister)
router.get('/dashboard', userController.userDashboard)
router.get('/record', userController.addNewRecord)

module.exports = router
