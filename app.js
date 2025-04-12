import express from 'express'
import userRouter from './routes/userRoute.js'
import orderRouter from './routes/orderRoute.js'
import swaggerUi from "swagger-ui-express"
import specs from './middleware/swagger.js'

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs,{
    explorer: true,
}))

app.use('/sakuriero',userRouter)
app.use('/sakuriero',orderRouter)

app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})


