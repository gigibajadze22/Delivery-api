import express from 'express'
import userRouter from './routes/userRoute.js'
import orderRouter from './routes/orderRoute.js'
const app = express()

app.use(express.json())


app.use('/sakuriero',userRouter)
app.use('/sakuriero',orderRouter)

app.listen(3000, () => {
    console.log(`server is running on port 3000`)
})


