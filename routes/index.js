const express = require('express');
const router = express.Router();
// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

// get tweets of a specific user
router.get('/users/:name', function (req, res) {
  let name = req.params.name;
  let list = tweetBank.find({name: name});
  // console.log("List", list);
  res.render('index', {tweets: list});

});

// get tweets with specific id
router.get('/tweets/:id', function (req, res) {
  let id = parseInt(req.params.id, 10);
  let list = tweetBank.find({id: id});
  res.render('index', {tweets: list});
})

// post tweets
router.post('/tweets', function(req, res, next) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;
