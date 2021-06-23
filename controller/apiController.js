const Quote = require('../models/quotes')

// ENDPOINTS

const api_get_all_quote =  (req, res) => {
    Quote.find()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
    })
}
  
// replace with the count ID
const api_get_one_quote = (req, res) => {     
    const value = req.params.value
    Quote.find({value: value})
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        console.log(err)
    })
} 
  
const api_delete_quote = (req, res) => {
    const id = req.params.id
    Quote.findByIdAndDelete(id)
        .then(result => {
            res.status(201).json({ redirect: '/quotes'})
        })
        .catch(err => {
            console.log(err)
            res.status().json({title: "Error", message: "An error was encountered"})
        })
  }
  
const api_update_quote = (req, res) => {
  
}
  
const api_create_quote = (req, res) => {
  
}
  
const api_search_for_quote = (req, res) => {
  
}

module.exports = {
    api_get_all_quote,
    api_get_one_quote,
    api_create_quote,
    api_update_quote,
    api_delete_quote,
    api_search_for_quote
}