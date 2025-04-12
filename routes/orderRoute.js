import express from 'express'
import {getOrder,createOrder,changeStatus, chooseCourier } from '../controllers/orderController.js'
import { auth,isAdmin,isAdminOrClient,isAdminOrCourier } from '../middleware/auth.js'

const orderRouter = express.Router()

orderRouter.route('/order').get(auth,getOrder)
orderRouter.route('/order').post(auth,isAdminOrClient,createOrder)
orderRouter.route('/order/changeStatus/:id').put(auth,isAdminOrCourier,changeStatus)
orderRouter.route('/order/chooseCourier/:id').post(auth,isAdmin,chooseCourier)

export default orderRouter

