const express = require("express")
const mongoose = require("mongoose")
//Path del routes
const cartaRoutes = require("./routes/carta")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/carta",cartaRoutes)
//Definimos MongoDB usuario:password@ip:puerto/nombre_db?consuladoDe=admin
mongoose.connect('mongodb://user6:root@54.227.9.233:27017/base6?authSource=admin')
    .then(()=>{
        app.listen(8082,()=>console.log("Servidor en linea desde el puerto 8082"))
    })
    .catch(err=>console.log(err))
