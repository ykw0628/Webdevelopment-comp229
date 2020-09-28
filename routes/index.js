let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    console.log('Request for home recieved');
    res.render('index');
  });
  router.get('/index', (req, res) => {
    console.log('Request for home recieved');
    res.render('index');
  });
  router.get('/aboutMe', (req, res) => {
    console.log('Request for home recieved');
    res.render('aboutMe');
  });

module.exports = router;
