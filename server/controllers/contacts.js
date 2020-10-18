let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a referece to the model
let Contact = require('../models/contacts');
module.exports.displayContactlist = (req, res, next) =>{
    Book.find((err, contactlist) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('../contactList', {title: 'contacts List', Contactlist: contactlist});
            
        }
    });
};
