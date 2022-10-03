const uuid = require('uuid')
const userDB = [
  {
    id: '316c3500-8956-47ab-8579-2c747e7e4f0a',
    first_name: 'Wilfredo ',
    last_name: 'Machado',
    email: 'wilfredo.machado@hotmail.com',
    password: '12345678',
    birthday: '1971/05/02'
  },
  {
    id: 'd0e0007a-3c13-4471-a331-5bdaafd3049a',
    first_name: 'Yenny ',
    last_name: 'Machado',
    email: 'machadoyenny1970@hotmail.com',
    password: '12345678',
    birthday: '1970/01/02'
  }
];

const getAllUsers = () => {
    return userDB
}

const getUserById = (id) => {
    const data = userDB.find(user_item => user_item.id === id)
    return data
}

const delUserById = (id) => {
  const index =userDB.findIndex(user_item => user_item.id == id)
  if(index !== -1){
    const data  = userDB.splice(index,1)
    return data
  }
}

const createUser = (userReq) => {
     const newUser = {
        "id": uuid.v4(),  ...userReq
    }
    userDB.push(newUser)
    return newUser
}
module.exports = { getAllUsers,getUserById,createUser, delUserById }