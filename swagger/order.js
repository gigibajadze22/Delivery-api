/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     Order:
 *       type: object
 *       properties:
 *         city:
 *           type: string
 *         name:
 *           type: string
 *         mobile:
 *           type: string
 *         address:
 *           type: string
 *         comment:
 *           type: string
 *         price:
 *           type: integer
 *         deliveryPrice:
 *           type: integer
 *         sum:
 *           type: integer
 *         statusId:
 *           type: integer
 *         courierId:
 *           type: integer
 * 
 * /sakuriero/order:
 *   get:
 *     summary: Get orders
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: id
 *         schema:
 *           type: integer
 *         description: Filter by order ID
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         description: Filter by city
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by customer name
 *       - in: query
 *         name: mobile
 *         schema:
 *           type: string
 *         description: Filter by mobile number
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *         description: Filter by address
 *       - in: query
 *         name: comment
 *         schema:
 *           type: string
 *         description: Filter by comment
 *       - in: query
 *         name: price
 *         schema:
 *           type: integer
 *         description: Filter by price
 *       - in: query
 *         name: deliveryPrice
 *         schema:
 *           type: integer
 *         description: Filter by delivery price
 *       - in: query
 *         name: sum
 *         schema:
 *           type: integer
 *         description: Filter by total sum
 *       - in: query
 *         name: statusId
 *         schema:
 *           type: integer
 *         description: Filter by status ID
 *       - in: query
 *         name: courierId
 *         schema:
 *           type: integer
 *         description: Filter by courier ID
 *     responses:
 *       200:
 *         description: Orders retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       401:
 *         description: Unauthorized
 * 
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - city
 *               - name
 *               - mobile
 *               - address
 *               - price
 *               - deliveryPrice
 *             properties:
 *               city:
 *                 type: string
 *               name:
 *                 type: string
 *               mobile:
 *                 type: string
 *               address:
 *                 type: string
 *               price:
 *                 type: integer
 *               deliveryPrice:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Bad request
 * 
 * /sakuriero/order/changeStatus/{id}:
 *   put:
 *     summary: Change order status (admin or courier only)
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - statusId
 *             properties:
 *               statusId:
 *                 type: integer
 *                 description: New status ID (1 to 4)
 *     responses:
 *       200:
 *         description: Status updated
 *       401:
 *         description: Invalid status ID or unauthorized
 *       404:
 *         description: Order not found
 * 
 * /sakuriero/order/chooseCourier/{id}:
 *   post:
 *     summary: Assign a courier to an order (admin only)
 *     tags: [Orders]
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *         description: Order ID to assign
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - courierId
 *             properties:
 *               courierId:
 *                 type: integer
 *                 description: ID of the courier
 *     responses:
 *       200:
 *         description: Courier assigned successfully
 *       400:
 *         description: Courier not found
 *       401:
 *         description: Courier ID missing
 */
