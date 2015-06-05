var express = require('express');
var router = express.Router();
var gaikan = require('gaikan');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/content', function(req, res, next) {
  gaikan.options.layout = null;
  res.render('index', { title: 'Express' });
  gaikan.options.layout = './views/layout.html';
});

module.exports = router;