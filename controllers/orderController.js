import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getOrder(req, res) {
  try {
    const userId = req.user.id;  
     
    const {id,city, name, mobile, address, comment, price, deliveryPrice, sum, statusId, courierId } = req.query;
    const where = {};
   
    
    if (id) where.id = parseInt(id);
    if (city) where.city = city;
    if (name) where.name = name;
    if (mobile) where.mobile = parseInt(mobile);
    if (address) where.address = address;
    if (comment) where.comment = comment;
    if (price) where.price = parseInt(price);
    if (deliveryPrice) where.deliveryPrice = parseInt(deliveryPrice);
    if (sum) where.sum = parseInt(sum);
    if (statusId) where.statusId = parseInt(statusId);
    if (courierId) where.courierId = parseInt(courierId);

    if (req.user.role === "client") {
      const orders = await prisma.orders.findMany({
        where: { userId: userId },  
      });

      if (!orders || orders.length === 0) {
        return res.status(404).json({ message: "No orders found for this user" });
      }

      return res.status(200).json(orders);  
    }

    if (req.user.role === "courier") {
      
      const courierOrders = await prisma.orders.findMany({
        where: { courierId: req.user.id },
      });

      if (!courierOrders || courierOrders.length === 0) {
        return res.status(404).json({ message: "No orders assigned to this courier" });
      }

      return res.status(200).json(courierOrders);  
    }

  
    const foundOrders = await prisma.orders.findMany({ where });
    res.status(200).json(foundOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}


async function createOrder(req, res) {
  try {
    const userId = req.user.id;  
    const { city, name, mobile, address, price, deliveryPrice } = req.body;
    const sum = price + deliveryPrice;

    
    const order = await prisma.orders.create({
      data: {
        city,
        name,
        mobile,
        address,
        price,
        deliveryPrice,
        sum,
      },
    });

    
    await prisma.orders.update({
      where: { id: order.id },
      data: { userId: userId }, 
    });

    
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


async function changeStatus(req,res){
   try {
        const { id } = req.params;
        
        const {statusId} = req.body;  
        if(!statusId || parseInt(statusId)>4){
          res.status(401).json({message: 'You can change only statusId 1-4'})
        }
        const orders = await prisma.orders.update({
          where: { id: parseInt(id) },
          data: {statusId},
          include: { status: true }
        });
        res.json({
          statusId: orders.statusId,
          name: orders.status.name
        });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

async function chooseCourier(req,res){
  try {
       const { id } = req.params;
       
       const {courierId} = req.body;  
       if(!courierId){
         res.status(401).json({message: 'You have to choose courier!'})
       }
       
       const courier = await prisma.users.findUnique({
        where: { id: courierId }
      });
  
      if (!courier) {
        return res.status(400).json({ message: "Courier not found" });
      }
      if (courier.roleId !== 3) {
        return res.status(403).json({ message: "This user is not a courier" });
      }
       const orders = await prisma.orders.update({
        
         where: { id: parseInt(id) },
         data: {courierId},
        include: { status: true }
       });
       res.json({courierId, status: orders.status.name});
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}





export { getOrder, createOrder, changeStatus,chooseCourier }