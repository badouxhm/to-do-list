const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/to-do-list')
        console.log("connexion a la BDD réussie")
    }
    catch (err){
        console.error('Erreur de connexion à MongoDB :', err);
    }
}

module.exports = connectDB;