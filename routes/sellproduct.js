const express = require('express')
const { sellProuctController } = require('../controllers/sellProductController')
const fs = require('fs')
const multer = require('multer')
const imageModel = require('../models/imageModel')
const sellProductModel = require('../models/productModel')
// const requireAuth = require('../middleware/requireAuth')
const { getall } = require('../controllers/sellProductController')
const productModel = require('../models/productModel')
const { getAltele, deleteProduct, getArta, getImbracaminte, getPentruAcasa, getCeasuri, getTehnologie, getNatura, getPapuci, getJucarii } = require('../controllers/sellProductController')
const validator = require('validator')

const router = express.Router()

router.get('/altele', getAltele)
router.get('/arta', getArta)
router.get('/imbracaminte', getImbracaminte)
router.get('/pentruacasa', getPentruAcasa)
router.get('/ceasuri', getCeasuri)
router.get('/tehnologie', getTehnologie)
router.get('/natura', getNatura)
router.get('/papuci', getPapuci)
router.get('/jucarii', getJucarii)
router.delete('/delete/:id', deleteProduct)

// router.use(requireAuth)

// router.post('/post', sellProuctController)

// router.get('/jucarii', getJucarii)

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'uploads')
        // destinatia pozei
    },
    filename: (req,file,cb) => {
        cb(null,file.originalname)
        // cum sa se numeasca poza
    }
})

const uploads = multer({ storage: storage })

router.get('/getall', getall)

router.delete('/deletealldocuments', async(req,res)=>{
    await productModel.deleteMany({})
    res.send('deleted all documents')
    
})

router.post('/img', uploads.single('testImage'), async(req,res) => {
    try{
        //  const sellProductModell = new sellProductModel({
        //     titlu: req.body.titlu,
        //     categorie: req.body.categorie,
        //     // poza: {
        //     //     data: fs.readFileSync('uploads/' + req.file.filename),
        //     //     contentType: 'image/png'
        //     // },
        //     poza: req.file.filename,
        //     email: req.body.email,
        //     telefon: req.body.telefon,
        //     descriere: req.body.descriere,
        //     pret: req.body.pret,
        //     locatie: req.body.locatie,
        //     username: req.body.username,
        // })
        // await sellProductModell.save()
        if(!validator.isEmail(req.body.email)){
            // res.status(400).json({msg: error})
            console.log('email gresit')
        }else{
            console.log('correct email')
        }

        await sellProductModel.create({ titlu: req.body.titlu, categorie: req.body.categorie, poza: req.file.filename, email: req.body.email, telefon: req.body.telefon, descriere: req.body.descriere, pret: req.body.pret, locatie: req.body.locatie, username: req.body.username})
        console.log('succes')
        res.status(200).json({msg: 'succes'})
    }catch(error) {
        // res.json({msg: error})
        console.log(error)
    }
        // return 

    // try {
    //     const filename = await req.file.filename
    //     const filePath = await `./uploads/${filename}` 
    //     await fs.unlinkSync(filePath)
    //     console.log(`image ${filename} was succesfully deleted`)
    // }catch(error) {
    //     console.log(error)
    // }
})

module.exports = router