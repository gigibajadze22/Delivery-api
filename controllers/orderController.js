import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getOrder(req, res) {
  try {
    const { city, name, mobile, address, comment, price, deliveryPrice, sum, statusId, courierId } = req.query;
    const where = {};

    if (city) where.city = city;
    if (name) where.name = name;
    if (mobile) where.mobile = parseInt(mobile);
    if (address) where.address = address;
    if (comment) where.comment = comment;
    if (price) where.price = parseInt(price);
    if (deliveryPrice) where.deliveryPrice = parseInt(deliveryPrice);
    if (sum) where.sum = parseInt(sum)
    if (statusId) where.statusId = parseInt(statusId)
    if (courierId) where.courierId = parseInt(courierId)

    const orders = await prisma.orders.findMany({ where })
    res.status(200).json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }

}


async function createOrder(req, res) {
  try {
    const { city, name, mobile, address, price, deliveryPrice } = req.body;
    const sum = price + deliveryPrice;
    const user = await prisma.orders.create({
      data: { city, name, mobile, address, price, deliveryPrice, sum },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export { getOrder, createOrder }