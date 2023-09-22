var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Game = require('../models/games');


/*

const newGame = new Game({

    code: 'LACAPSULE',
    name : 'SIMON GAME',
    difficulty : 'EASY',

  })
  
  newGame.save().then(() => {
  
    console.log('New game saved')
  
    Game.find().then((data) => {
  
    console.log(data);
    
    }) 
  
  }) 
  */
 
  module.exports = router;

