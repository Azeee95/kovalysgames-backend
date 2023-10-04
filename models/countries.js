const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({

iso2 : String,
iso3 : String,
cities : [String],
name : String,
phone: String,
capital: String,
flag : String

});

const Country = mongoose.model('countries', countrySchema);

module.exports = Country;
