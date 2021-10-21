const Carta = require('../models/carta')
const mongoose = require("mongoose")

//Método para agregar cartas
exports.postAgregarCarta = async (req,res)=>{
    const carta = new Carta(req.body)
    carta._id = new mongoose.Types.ObjectId()
    try{
        // Realizamos la condición con findOne(), tomando en cuenta que no se debe de repetir numeracion, color y palo
        const cartaExiste = await Carta.findOne({ numeracion: req.body.numeracion, color: req.body.color, palo: req.body.palo });
        //Si no existe
        if (!cartaExiste){
            //Guardamos la carta y se almacena
            await carta.save()
            console.log(carta)
            console.log("Carta registrada correctamente")
            res.send({operacion:"Carta agregada correctamente"})
        }else{
            //Si ya existe mandamos el siguiente mensaje
            res.send({operacion:"Carta no registrada, la carta esta repetida, verifique los datos"})
        }
    }catch(err){
        console.log(err)
        res.send({operacion:"incorrecta"})
    }
}

//Método para obtener las cartas almacenadas
exports.getObtenerCarta = async (req,res)=>{
    //Obtenemos la informacion que contiene nuestra coleccion
    const cart = await Carta.find()
    console.log(cart)
    res.json(cart)
}

//Método para borrar las cartas por medio de un identificador
exports.postBorrarCarta = async (req,res)=>{
    await Carta.findByIdAndRemove(req.body._id)
    console.log("Carta eliminado")
    res.json({operacion:"correcta"})
}