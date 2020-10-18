let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//create a referece to the model
let Contacts = require('../models/contacts');


module.exports.displayContactlist = (req, res, next) =>{
        Contacts.find((err, contactList) =>{
            if(err) {
                return console.error(err);
            }
            else{
                res.render('index', {title: 'Contact List', contactList: contactList});
                
            }
    });
};
module.exports.DisplayAddpage = (req,res,next) =>{
    res.render('index', {title: 'Add contacts'});
};
module.exports.processAddpage =(req,res,next) =>{ //capture the id of the field, transport into page
    let contact = Contacts({
        "name": req.body.contactName,
        "number":req.body.contactNumber,
        "email":req.body.contactEmail

    });
    Contacts.create(contact,(err, Book)=>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            //refresh the book list
            res.redirect('/contacts-list'); // specify where we wanna go
        }
    });
};
module.exports.DisplayUpdatepage = (req,res,next) =>{
    let id = req.params.id;
    Contacts.findById(id, (err, contacttoEdit) =>{
        if(err){
            console.log(err);

            res.end(err);
        }else{
            //show the edit view
            res.render('index',{title:'Update contacts',contact: contacttoEdit});
        }
    });


};
module.exports.processUpdatepage =(req,res,next) =>{
    let id = req.params.id;

    let updateContact = Contacts({
        "_id": id,
        "name": req.body.contactName,
        "number":req.body.contactNumber,
        "email":req.body.contactEmail

    });
    Contacts.updateOne({_id: id}, updateContact, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contacts-list'); // specify where we wanna go
        }
                
    });

};
module.exports.processDeletepage = (req,res,next) =>{
    let id = req.params.id;
    Contacts.remove({_id:id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contacts-list'); // specify where we wanna go
        }
    })

};