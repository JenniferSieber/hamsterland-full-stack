const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3001

// connect to mongodb
mongoose.connect(`${process.env.DB_URI}`)
  .then(() => console.log(`MongoDB Connected`))
  .catch(err => console.log(`MongoDB error in connection: ${err}`))

  //app middleware
  app.use(cors())
  app.use(express.static('public'))
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.set('view engine', 'ejs')

// routes
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.listen(port, () => console.log(`Server connected port: ${port}`))

