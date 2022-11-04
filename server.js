require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes = require('./routes/user')
const sellProuctRoutes = require('./routes/sellproduct')
// const multer = require('multer')
// const imageModel = require('./models/imageModel')
// const fs = require('fs')

app.use(express.json())

app.use(express.static('uploads'))

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})


// const storage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null, 'uploads')
//         // destinatia pozei
//     },
//     filename: (req,file,cb) => {
//         cb(null,file.originalname)
//         // cum sa se numeasca poza
//     }
// })

// const uploads = multer({ storage: storage })



// app.post('/img', uploads.single('testImage'), (req,res) => {
//     const saveImage = new imageModel({
//         name: req.body.name,
//         img: {
//             data: fs.readFileSync('uploads/' + req.file.filename),
//             contentType: 'image/png'
//         }
//     })
//     saveImage.save()

//     try {
//         const filename = req.file.filename
//         const filePath = `./uploads/${filename}` 
//         fs.unlinkSync(filePath)
//         console.log(`image ${filename} was succesfully deleted`)
//     }catch(error) {
//         console.log(error)
//     }
//     res.send('image is saved in db')
// })


// routes
app.use('/api/user', userRoutes)
app.use('/api/sell', sellProuctRoutes)


mongoose.connect(process.env.MONGO_URL)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("connected to db & listening on port", process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})

// https://cloud.mongodb.com/v2/635829b7203faf57d15fc724#clusters - link sa vad in browser db mongo
