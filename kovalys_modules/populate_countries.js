
const datatopopulate = require('../kovalys_modules/countries.json');

// const datatopopulate = require('../kovalys_modules/countries_test.json');

module.exports = function populateDB (data){

  let iso2 = '';
  let iso3 = '';
  let cities = [];
  let name = '';
  let phone = '';
  let capital = '';
  let flag = '';

data.map((item) => {

  iso2 = item.iso2;
  iso3 = item.iso3;
  name = item.name;
  phone = item.phone;
  capital = item.capital;
  flag = item.flag;
  cities = [];

  for (let i = 0; i < item.cities.length; i++) {

    cities.push(item.cities[i]);

  }

  const newCountry = new Country({
  
    iso2 : iso2,
    iso3 : iso3,
    cities : cities,
    name : name,
    phone: phone,
    capital: capital,
    flag : flag
    
  });
  
  newCountry.save().then(() => {
  
    message = `New country saved : ${item.name}`;
  
  })


})
  
}

//populateDB(datatopopulate);