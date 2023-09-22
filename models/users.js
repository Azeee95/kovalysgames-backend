const mongoose = require('mongoose');

const scores = mongoose.Schema({

    game: [{ type: mongoose.Schema.Types.ObjectId, ref: 'games' }],
    date: Date,
    level: Number,
   
    });

const userSchema = mongoose.Schema({

    codeneo : String,
    email: String,
    password: String,
    fullname: String,
    company: String,
    jobtitle: String,
    city: String,
    linkedin: String,
    profilepicture: String,
    scores: [scores]

});

const User = mongoose.model('users', userSchema);

module.exports = User;