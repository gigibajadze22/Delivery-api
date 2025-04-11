import express from 'express'
import { getUsers, createUser, editUser, deleteUser,signin } from '../controllers/userController.js'

const userRouter = express.Router()


userRouter.route('/users').get(getUsers)
userRouter.route('/user').post(createUser)
userRouter.route('/user/:id').put(editUser)
userRouter.route('/user/:id').delete(deleteUser)
userRouter.route('/user/signin').post(signin)

export default userRouter