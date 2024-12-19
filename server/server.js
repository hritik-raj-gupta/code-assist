const express=require("express")
const app=express()
const cors=require("cors")
const code = require("./routers/code")
require("dotenv").config()

app.use(cors())
app.use(express.json())

app.use("/api",code)

app.get("/",(req, res)=>{
    res.json({"message":"running"})
})

const PORT=process.env.PORT || 8007

app.listen(PORT,()=>{
    console.log("port is running on PORT:", PORT)
})