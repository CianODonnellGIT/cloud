const express = require('express');
const router = express.Router();

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },  //send 0 first, then parse(float) to send number
  ourId: { type: String, required: true },
  gender: { type: String, required: true },
  imageUri: { type: String, required: true }
})

const Product = mongoose.model('Product', productSchema) // 'Product' refers to the collection, so maps products collection to productSchema; see lecture notes

let nextProductId = 0;
router.post('/addProduct', (req, res, next) => {
  const {name, age, gender, imageUri}=req.body;
  new Product({ ourId: '' + nextProductId, name: name, age: age, gender: gender, imageUri: imageUri })
    .save()
    .then(result => {
      nextProductId++
      console.log('saved product to database')
      res.redirect('/')
    })
    .catch(err => {
      console.log('failed to addAproduct: ' + err)
      res.redirect('/')
    })
})

router.get('/', (req, res, next) => {
  Product.find() // Always returns an array
    .then(products => {
      res.json({'AlltheProducts': products})
      console.log('Sending All Product')
    })
    .catch(err => {
      console.log('Failed to find: ' + err)
      res.json({'Products': []})
    })
})

router.post('/', (req, res, next) => {
  console.log(req.body.testData)
  Product.find() // Always returns an array
    .then(products => {
      res.json({'POST Mongoose Products': products})
    })
    .catch(err => {
      console.log('Failed to find: ' + err)
      res.json({'Products': []})
    })
})


router.post('/updateSpecificProduct', (req, res, next) => {
  const {ourId,name,age, gender, imageUri}=req.body;
  
  //name: name, price: price 
  Product.find({ ourId: ourId}) // Always returns an array
   .then(products => {
      let specificProduct = products[0] // pick the first match
      specificProduct.name = name
      specificProduct.age = age
      specificProduct.gender = gender
      specificProduct.imageUri = imageUri 
      specificProduct.save() // Should check for errors here too
      console.log('Updated Product') 
      res.redirect('/')
    })
  //   res.redirect('/')  
    .catch(err => {
      console.log('Failed to find product: ' + err)
      res.send('No product found')
    })
})

router.delete('/deleteSpecificProduct', (req, res, next) => {
  Product.findOneAndRemove({ ourId: req.body.id }) 
    .then(resp => {
     {/* res.redirect('/') */}
     res.json({'success': true})
     console.log('Product Deleted')
    })
    .catch(err => {
      console.log('Failed to find product: ' + err)
      res.send('No product found')
      res.json({'success': false})
    })
    
})

exports.routes = router

