let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    console.log('Request for home recieved');
    res.render('index');
  });
  router.get('/index', (req, res) => {
    console.log('Request for Index recieved');
    res.render('index');
  });
  router.get('/aboutMe', (req, res) => {
    console.log('Request for About me recieved');
    res.render('index');
  });
  router.get('/projects', (req, res, next) => {
    res.render('index', {title: 'projects'});
  });
  router.get('/services', (req, res, next) => {
    res.render('index', {title: 'services'});
  });

  router.get('/contact', (req, res, next) => {
    res.render('index', {title: 'contact'});
  });

module.exports = router;
