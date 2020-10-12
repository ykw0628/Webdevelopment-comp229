let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Book = require('../models/book');

//Get Route for the book list page - read operation
router.get('/', (req, res, next) =>{
    Book.find((err, bookList) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('book', {title: 'Book List', BookList: bookList});
            //console.log(BookList);
        }
    });
});


module.exports = router;