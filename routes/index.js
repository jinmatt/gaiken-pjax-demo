var express = require('express');
var router = express.Router();
var gaikan = require('gaikan');
var debug = require('debug')('gaikan-pjax:server');

/* GET home page. */
router.get('/', function(req, res, next) {
  gaikan.options.layout = './views/layout.html';
  res.render('index', { title: 'Home' });
});

router.get('/next', function(req, res, next) {
  if (req.header('X-PJAX')) {
    gaikan.options.layout = null;
    return res.render('next', { title: 'Next' });
  }

  gaikan.options.layout = './views/layout.html';
  res.render('index', { title: 'Express' });
});

router.get('/content', function(req, res, next) {
  gaikan.options.layout = null;
  res.render('index', { title: 'Express' });
  gaikan.options.layout = './views/layout.html';
});

module.exports = router;
