const Product = require('../models/productModel')

// const sellProuctController = (req, res) => {
//     const { titlu, categorie, telefon, email, descriere, pret, localizare, username } = req.body

//     const product = Product.create({ titlu, categorie, telefon, email, descriere, pret, localizare, username, poza: { data: req.file.filename, contentType: 'image/png ' },  })
    
//     res.status(200).json(product)
// }

const getall = async (req,res) => {
    const alldata =  await Product.find({}).sort({ created_at: -1 })
    res.json(alldata)
}
const getJucarii = async (req,res) => {
    const jucarii = await Product.find({ categorie: 'jucarii' })
    res.json(jucarii)
}
const getPapuci = async (req,res) => {
    const papuci = await Product.find({ categorie: 'papuci' })
    res.json(papuci)
}
const getNatura = async (req,res) => {
    const natura = await Product.find({ categorie: 'natura' })
    res.json(natura)
}
const getTehnologie = async (req,res) => {
    const tehnologie = await Product.find({ categorie: 'technologie' })
    res.json(tehnologie)
}
const getCeasuri = async (req,res) => {
    const ceasuri = await Product.find({ categorie: 'ceasuri' })
    res.json(ceasuri)
}
const getPentruAcasa = async (req,res) => {
    const ceasuri = await Product.find({ categorie: 'pentru-casa' })
    res.json(ceasuri)
}
const getImbracaminte = async (req,res) => {
    const îmbrăcăminte = await Product.find({ categorie: 'imbracaminte' })
    res.json(îmbrăcăminte)
}
const getArta = async (req,res) => {
    const arta = await Product.find({ categorie: 'arta' })
    res.json(arta)
}
const getAltele = async (req,res) => {
    const altele = await Product.find({ categorie: 'altele' })
    res.json(altele)
}
const deleteProduct = async (req,res) => {
    const { id } = req.params
    await Product.findByIdAndDelete({ _id: id })
    .catch((error) => res.status(400).json({ error: error }))

    res.status(200).json({ succes: 'succesfuly deleted' })
}

module.exports = {
    deleteProduct,
    getall,
    getAltele,
    getArta,
    getImbracaminte,
    getPentruAcasa,
    getCeasuri,
    getTehnologie,
    getNatura,
    getPapuci,
    getJucarii,
}