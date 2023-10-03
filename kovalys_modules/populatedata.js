var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

// Import Kovalys Connect Modules

const generateTmpNeo = require ('./generateneocode');
const results = require('./results.json');

// Function

/*
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
*/

module.exports = async function populatedata(datatopopulate) {

  /*
  let result = results[4].Message;

  const data = datatopopulate.map((e) => 

      {
  
  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  
  function validateEmail(email) {
    return emailRegex.test(email);
  }
  
  const email = e.email.trim();
  const isValidEmail = validateEmail(email);
  const codeNeo = generateTmpNeo();
  
  if (isValidEmail) {
  
    const data = await User.findOne({email: {$regex: new RegExp(email, 'i')}});

      if (data !== null) {
        
        message = `User exists : ${e.email}`;
  
      } else {
  
        const newUser = new User({
  
          codeneo: codeNeo,
          certified: e.certified,
          email : e.email,
          password: e.password,
          firstname: e.firstname,
          lastname: e.lastname,
          country: e.country,
          city: e.city,
          phonenumber: e.phonenumber,
          scores: {
        
            game: '650d6ca4f0716a93a1f1466c',
            date: new Date(),
            level: 0
        
          }
        
        });
        
        newUser.save().then(() => {
        
          message = `New user saved : ${e.email}`;
        
        })
  
      }

  
  } else {
  
    message = `Wrong email format : ${e.email}`
  
  }



  })

  */

}
