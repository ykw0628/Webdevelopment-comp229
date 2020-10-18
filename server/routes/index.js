let express = require('express');
let router = express.Router();

let indexController  = require('../controllers/index');
let mongoose = require('mongoose');


/* GET home page. */
router.get('/', indexController.displayHomePage);


/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);

/* GET Products page. */
router.get('/projects', indexController.displayProjectPage);

/* GET Services page. */
router.get('/services', indexController.displayServicePage);


/* GET Contact Us page. */
router.get('/contact', indexController.displayContactPage);



module.exports = router;
