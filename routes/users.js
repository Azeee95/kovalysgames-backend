var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

/* GET users listing. */
router.get('/', function(req, res, next) {

  User.find().then((data) => {
    
    res.json(data);
  
  }) 

});

function generateTmpNeo () {

  let randomNbr = Math.floor(Math.random() * 9000) + 1000;
  let date = new Date();

  let year = date.getFullYear();

  let day = date.getDate();

    if(day < 10){

      day = day.toString().padStart(2, '0')

    }

    let month = date.getMonth()+1;

    if(month < 10){

      month = month.toString().padStart(2, '0')

    }

  let codeNeo = `TMP${year}${month}${day}${randomNbr}`

 return codeNeo;

}

router.post('/add', (req, res) => {

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const email = req.body.email.trim();
const isValidEmail = validateEmail(email);

if (isValidEmail) {

  User.findOne({email: {$regex: new RegExp(email, 'i')}}) 
  .then((data) => {

    console.log(data)
    codeNeo = generateTmpNeo();

    if (data !== null) {

      res.json('User exists')

    } else {

      const newUser = new User({

        codeneo: codeNeo,
        certified: false,
        email : email,
        password: req.body.password,
        fullname: req.body.fullname,
        city: req.body.city,
        scores: {
      
          game: '650d6ca4f0716a93a1f1466c',
          date: new Date(),
          level: req.body.level
      
        }
      
      });
      
      newUser.save().then(() => {
      
            res.json('New user saved');
      
      })

    }

  })

} else {

  res.json('Wrong email format')

}

  
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
