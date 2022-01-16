const express = require('express')
const router = express.Router()
// const app = express()
const path = require('path')

// router.get('/', (req, res) => {
//   res.render('index')
// })

router.get('/', (req, res) => {
  res.render('index');
})

router.get('/about', (req, res) => {
  res.render('about');

  // res.sendFile(path.join(__dirname, '../templates/about.html'))
})

router.get('/contactus', (req, res) => {
  res.render('contactus');

  // res.sendFile(path.join(__dirname, '../templates/contactus.html'))
})

module.exports = router
