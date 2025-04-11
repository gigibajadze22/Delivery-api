import express from 'express'
import {getOrder,createOrder } from '../controllers/orderController.js'

const orderRouter = express.Router()

orderRouter.route('/order').get(getOrder)
orderRouter.route('/order').post(createOrder)


export default orderRouter