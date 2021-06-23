const Quote = require('../models/quotes')
const quote_index = (req, res) => {
    Quote.find().sort({ createAt: -1 })
        .then(result => {
            res.render('index', {quotes: result, title: 'All Quotes'})
        }) 
        .catch(err => {
            console.log(err);
        })
}

const quote_details = (req, res) => {
    const id = req.params.id
    Quote.findById(id)
        .then(result => {
            res.render('details', {quote: result, title: 'Quote Details'})
        })
        .catch(err => {
            console.log(err)
            res.render('404', {title: 'Page not found'})
        })
}

const quote_create_get = (req, res) => {
    res.render('create', {title: 'Write a new Quote'})
}



const quote_create_post = (req, res) => {

    var outCount = 0;
    Quote.count()
        .then(count => {
            outCount = count;
            console.log(outCount)
            const quote = new Quote({
                author: req.body.author,
                details: req.body.details,
                quote_type: req.body.quote_type,
                source: req.body.source,
                value: outCount
            })

            quote.save()
                .then(result => {
                    console.log(result)
                    res.redirect('/quotes')
                })
                .catch(err => {
                    console.log('err')
                })
        })
        .catch(err => {
            console.log(err)
        })
    console.log(outCount)

    //const quote = new Quote(req.body)
    
    // quote.save()
    //      .then(result => {
    //         console.log(result)
    //         res.redirect('/quotes')
    //      })
    //      .catch(err => {
    //          console.log(err)
    //      })
}

const quote_delete = (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/quotes'})
        })
        .catch(err => {
            console.log(err)
        })
}



module.exports = {
    quote_index,
    quote_details,
    quote_create_get,
    quote_create_post,
    quote_delete
}