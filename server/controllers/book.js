let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a referece to the model
let Book = require('../models/books');
let bookController = require('../controllers/book')
module.exports.displayBookList = (req, res, next) =>{
    Book.find((err, bookList) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('book', {title: 'Book List', BookList: bookList});
            //console.log(BookList);
        }
    });
};