let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our Book Model
let Contacts = require('../models/contacts');

let bookController = require('../controllers/contacts');

//Get Rout for the book list page - read operation
router.get('/', (req, res, next) =>{
    Contacts.find((err, contactList) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('contactsList/contactsList', {title: 'Contact List', contactList: contactList});
            
        }
    });
});
//Get Route for displaying the update page - create operation
router.get('/update', (req,res,next) =>{
    res.render('contactsList/update', {title: 'update'});

});
module.exports = router;