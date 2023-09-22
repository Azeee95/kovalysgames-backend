var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/add', (req, res) => {

  const newUser = new User({

    codeneo: req.body.codeneo,
    email : req.body.email,
    password: req.body.password,
    fullname: req.body.fullname,
    company: req.body.company,
    jobtitle: req.body.jobtitle,
    city: req.body.city,
    linkedin: req.body.linkedin,
    profilepicture: req.body.profilepicture,
    scores: {
  
      game: '650d6ca4f0716a93a1f1466c',
      date: new Date(),
      level: req.body.level
  
    }
  
  });
  
  newUser.save().then(() => {
  
    console.log('New user saved')
    
      User.find().then((data) => {
    
        res.json(data);
      
      }) 
  
  })

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
