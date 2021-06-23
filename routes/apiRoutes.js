const express = require('express')
const apiController = require('../controller/apiController')

const router = express.Router()

router.get('/', apiController.api_get_all_quote)
router.get('/:value', apiController.api_get_one_quote)
router.post('/create', apiController.api_create_quote)
router.get('/search', apiController.api_search_for_quote)
//router.put('/update', apiController.api_update_quote)
//router.delete('/delete/:id', apiController.api_delete_quote)

module.exports = router
