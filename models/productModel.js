const mongoose = require('mongoose')


const Schema = mongoose.Schema

const productSchema = new Schema({
    titlu: {
        type: String,
        required: true
    },
    categorie: {
        type: String,
        required: true
    },  
    // poza: {
    //     data: Buffer,
    //     contentType: String
    // },
    poza: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefon: {
        type: Number,
        required: true
    },
    descriere: {
        type: String,
        required: true
    },
    pret: {
        type: Number,
        required: true
    },
    locatie: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    created_at: {
        type: Date, 
        required: true,
        default: Date.now
    }
})

 
module.exports = mongoose.model('sellproduct', productSchema)