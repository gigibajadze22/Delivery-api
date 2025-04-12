import express from 'express'
import { getUsers, createUser, editUser, deleteUser,signin } from '../controllers/userController.js'
import { auth,isAdmin } from '../middleware/auth.js'

const userRouter = express.Router()


userRouter.route('/users').get(auth,isAdmin,getUsers)
userRouter.route('/user').post(auth,isAdmin,createUser)
userRouter.route('/user/:id').put(auth,isAdmin,editUser)
userRouter.route('/user/:id').delete(auth,isAdmin,deleteUser)
userRouter.route('/user/signin').post(signin)

export default userRouter