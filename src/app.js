const express = require("express");
const userRouter = require('./users/users.routers')

/*  Handle Enviroment require view only Admin  */
require('dotenv' ).config();
const port = process.env.PORT;
/*  Endo Handle Enviroment */

const app = express();
app.use(express.json());


/*  path for server ready running */
app.get('/', (req, res) => {
    res.status(200).json({message:'Server at Running Now...!'})
})

app.use("/", userRouter) /*  Path and verd Htpp  */

app.listen(port, () => {
    console.log(`Server started at port : ${port}`)
})