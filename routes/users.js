var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');
const Country = require('../models/countries');

const uid2 = require ('uid2');
const token = uid2(32);


// Import Kovalys Connect Modules

const signin = require('../kovalys_modules/signin')
const populatedata = require ('../kovalys_modules/populatedata')
const results = require('../kovalys_modules/results');
const signup = require('../kovalys_modules/signup');

/* GET users listing. */

router.get('/', function(req, res, next) {

  User.find().then((data) => {
    
    res.json(data);
  
  }) 

});


router.post('/signin', async (req, res) => {

  const credentials = [{
  
    email : req.body.email,
    password: req.body.password,
  
  }]

  const result = await signin(credentials);

  console.log(result)
  
  res.json(result);
  
})

router.post('/signup', async (req, res) => {

const datareceived = [{

  email : req.body.email,
  password: req.body.password,
  firstname: req.body.firstname,
  lastname: req.body.lastname,
  country: req.body.country,
  city: req.body.city,
  phonenumber: req.body.phonenumber,

}]

const result = await signup(datareceived);

res.json(result);

});



router.post('/score', (req, res) => {

  User.updateOne(

    { email: req.body.email },
    { $push: { scores: {
    
      game: '650d6ca4f0716a93a1f1466c',
      date: new Date(),
      level: req.body.level
    
    } } }
  
  ).then(() => res.json('New Score added'));

 });


module.exports = router;
