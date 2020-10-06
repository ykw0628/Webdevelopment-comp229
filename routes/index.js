let express = require('express');
let router = express.Router();

let mongoose = require('mongoose');

let Movie = require('../models/movie');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET Products page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'projects'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

/* GET Movie list. */
router.get('/movie-list', function(req, res, next) {
  
  Movie.Model.find((err,data) =>{
    if (err) {
      console.log(err);
      res.end();
    }
    
   res.render('index', { title: 'Movie List', movieList: data });
  });

});

module.exports = router;
