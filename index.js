const express =require("express")
const mongoose= require("mongoose")
require("dotenv").config()
const port=process.env.port
const url= process.env.url
const app= express()
app.use(express.json())

const router = require("./router/router")

app.use("/api/v1/",router)


mongoose.connect(url).then(()=>{console.log("db established")
    app.listen(port,()=>{
        console.log(`app is up and running on ${port}`)
    })
}).catch((err)=>{
    console.log("unable to connect to db because"+err)
})

