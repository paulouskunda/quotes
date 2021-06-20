require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const http = require('http')
const quotesRoutes = require('./routes/quotesRoutes');
const Quote = require('./models/quotes')
const fs = require('fs');
const app = express()

const dbURI = "your_url"

mongoose.connect(dbURI, { userNewParser: true, useUnifiedTopology: true})
        .then(result => app.listen(process.env.PORT || 3012))
        .catch(err => console.log(err))


app.set('view engine', 'ejs')

// middleware


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('combined'))

// let quoteData = fs.readFileSync('Quotes.json');  
// let quotes = JSON.parse(quoteData);  
// // db.city.insertMany(cities)  using mongo client 
// Quote.insertMany(quotes)  
// console.log(quotes); 

app.use((req, res, next) => {
    res.locals.path = req.path
    next()
})

// routes 

// routes
app.get('/', (req, res) => {

    res.redirect('/quotes');
});


app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
  });

  // replace with the count ID
app.get('/api/:value', (req, res) => {
      
      const value = req.params.value
      Quote.find({value: value})
      .then(result => {
          res.status(200).json(result)
      })
      .catch(err => {
          console.log(err)
      })
})

  // quotes routes
app.use('/quotes', quotesRoutes);
  
  // 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});
