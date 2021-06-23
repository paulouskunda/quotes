require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const http = require('http')
const quotesRoutes = require('./routes/quotesRoutes');
const apiRoutes = require('./routes/apiRoutes')
const Quote = require('./models/quotes')
const fs = require('fs');
const app = express()

const dbURI = "mongodb+srv://we_care_user:wecare_user_1234@nodewecarecluster.jl8pq.mongodb.net/initialDb?retryWrites=true&w=majority"
// const dbURI = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASSWORD}@nodewecarecluster.jl8pq.mongodb.net/initialDb?retryWrites=true&w=majority`

mongoose.connect(dbURI, { userNewParser: true, useUnifiedTopology: true})
        .then(result => app.listen(process.env.PORT || 3009))
        .catch(err => console.log(err))


app.set('view engine', 'ejs')

// middleware


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))



app.use((req, res, next) => {
    res.locals.path = req.path
    next()
})


// routes
app.get('/', (req, res) => {
    res.redirect('/quotes')
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
  });

app.use('/api', apiRoutes)

  // quotes routes
app.use('/quotes', quotesRoutes)


  // 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' })
})
