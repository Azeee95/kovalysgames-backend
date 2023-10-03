var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

// Authentication tools
const uid2 = require ('uid2');
const bcrypt = require('bcrypt');


// Import Kovalys Connect Modules

const generateneocode = require ('./generateneocode');
const results = require('./results.json');

// Function

module.exports = async function signup(userdata) {

  let result = results[4].Message;

  const codeneo = generateneocode();
  const certified = false;
  const email = userdata[0].email.trim();
  const password = userdata[0].password.trim();
  const hash = bcrypt.hashSync(password, 10)
  const token = uid2(32);
  const firstname = userdata[0].firstname.trim();
  const lastname = userdata[0].lastname.trim();
  const country = userdata[0].country.trim();
  const city = userdata[0].city.trim();
  const phonenumber = userdata[0].phonenumber.trim();

  const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  
  function validateEmail(email) {
    return emailRegex.test(email);
  }
  
  const isValidEmail = validateEmail(email);
  
  if (!isValidEmail) {
  
    result = results[0].Message 
    return result;

  } else {

    const data = await User.findOne({email: {$regex: new RegExp(email, 'i')}});

    if (data !== null) {

      result = results[5].Message 
      return result;

    } else {

      const newUser = new User({
  
        codeneo: codeneo,
        certified: certified,
        email : email,
        password: hash,
        token: token,
        firstname: firstname,
        lastname: lastname,
        country: country,
        city: city,
        phonenumber: phonenumber,
        scores: {
      
          game: '650d6ca4f0716a93a1f1466c',
          date: new Date(),
          level: 0
      
        }
      
      });
      
       const newitem = await newUser.save();

       if (newitem) {

        result = results[6].Message 
        return result;

       } else {

        result = results[7].Message 
        return result;

       }

      }

    }
  }
    


  

