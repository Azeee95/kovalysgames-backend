const mongoose = require('mongoose');

const scores = mongoose.Schema({

    game: [{ type: mongoose.Schema.Types.ObjectId, ref: 'games' }],
    date: Date,
    level: Number,
   
    });

const userSchema = mongoose.Schema({

    codeneo : String,
    certified: Boolean,
    email: String,
    password: String,
    token: String,
    firstname: String,
    lastname: String,
    company: String,
    jobtitle: String,
    country: String,
    phonenumber: String,
    city: String,
    linkedin: String,
    profilepicture: String,
    scores: [scores]

});

const User = mongoose.model('users', userSchema);

module.exports = User;