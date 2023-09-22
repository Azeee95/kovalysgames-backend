const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({

code: String,
name : String,
difficulty : String,

});

const Game = mongoose.model('games', gameSchema);

module.exports = Game;
