let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
  });
  router.get('/index', (req, res) => {
    res.render('index');
  });
  router.get('/aboutMe', (req, res) => {
    res.render('aboutMe');
  });

  router.get('/projects', (req, res) => {
    res.render('projects');
  });

  router.get('/services', (req, res) => {
    res.render('index');
  });

  router.get('/contact', (req, res) => {
    res.render('contact');
  });



module.exports = router;
