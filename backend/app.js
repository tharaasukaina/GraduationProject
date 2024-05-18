import express from 'express'
import dotenv from "dotenv"
import connectDB from './DB/connection.js';
import cors from 'cors';
dotenv.config({path:'./config/.env'})
import * as indexRouter from './src/index.router.js'
const app = express()
const port = process.env.PORT
connectDB();
app.use(express.json())
app.use(cors());

const baseurl=process.env.BASEURL
app.use(`${baseurl}`,indexRouter.feedbackRouter)



app.use('*',(req,res)=>{
    res.status(404).json({message:"page not found"})
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))