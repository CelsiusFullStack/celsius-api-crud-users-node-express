const router = require('express').Router()
const userServices = require('./users.services')
router.post('/users', userServices.createNewUser)
router.get('/users', userServices.getUsers)
router.get('/users/:id', userServices.getOneUser)
router.delete('/users/:id', userServices.deleteOneUser)
module.exports = router