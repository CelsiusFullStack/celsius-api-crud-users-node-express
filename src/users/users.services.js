const { getAllUsers, getUserById, createUser, delUserById } = require('./users.controllers')

const createNewUser = (req, res) => {
    const  userReq  = req.body
    if(userReq){
        const data = createUser(userReq)
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Missing Data'})
    }
}

const getUsers = (req, res) => {
    const data = getAllUsers()
    res.status(200).json(data)
}

const getOneUser = (req, res) => {
    const id = req.params.id
    const data = getUserById(id)
    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: `User Id => ( ${id} ) Not Found`})
    }
}

const deleteOneUser = (req, res) => {
    const id = req.params.id
    const data = delUserById(id)
    if(data){
        res.status(202).json({data, message:`User Id => ( ${id} ) removed success`})
    } else {
        res.status(404).json({message: `User Id => ( ${id} ) Not Found`})
    }
}
module.exports = { getUsers,getOneUser,createNewUser, deleteOneUser }