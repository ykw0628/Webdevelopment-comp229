let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//Connect to our contacts Model
let Contacts = require('../models/contacts');

let bookController = require('../controllers/contacts');

//Get Rout for the contacts list page - read operation
router.get('/', (req, res, next) =>{  // slash means contactslist
    Contacts.find((err, contactList) =>{
        if(err) {
            return console.error(err);
        }
        else{
            res.render('index', {title: 'Contact List', contactList: contactList});
            
        }
    });
});
//Get Route for displaying the add page - create operation
router.get('/add', (req,res,next) =>{
    res.render('index', {title: 'Add contacts'});
});
//post process the Add page
router.post('/add', (req,res,next) =>{ //capture the id of the field, transport into page
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
});
//Get Route for displaying the Update page - create operation
router.get('/update/:id', (req,res,next) =>{
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


});
// post process Update page
router.post('/update/:id', (req,res,next) =>{
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

});
//get process the Delete page
router.get('/delete/:id', (req,res,next) =>{
    let id = req.params.id;
    Contacts.remove({_id:id}, (err) =>{
        if(err){
            console.log(err);
            res.end(err);
        }else{
            res.redirect('/contacts-list'); // specify where we wanna go
        }
    })

});
module.exports = router;