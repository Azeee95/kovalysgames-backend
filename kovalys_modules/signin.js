var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

// Import Kovalys Connect Modules

const results = require('./results')

// Function

module.exports = async function signin(credentials){

  let result = results[4].Message;

const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const email = credentials[0].email.trim();
const isValidEmail = validateEmail(email);

if (!isValidEmail) {

  result = results[0].Message 
  return result;

} else {

 let data = await User.findOne({email: {$regex: new RegExp(email, 'i')}}) 
  
    if (data == null) {

      result = results[1].Message 
      return result;
      
      } else {

        if (data.password !== credentials[0].password) {

          result = results[2].Message;
          return result;

      } else {

        result = results[3].Message;
        return result;
    
        }

      }

  }

}