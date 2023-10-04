// file system module to perform file operations
const fs = require('fs');
 
// json data

var apiURL = 'https://countriesnow.space/api/v0.1/countries';
 
async function fetchdata(dataURL, output){

const data = await (await fetch(dataURL)).json()

const datanew = data.data;

// stringify JSON Object
var jsonContent = JSON.stringify(datanew);
console.log(jsonContent);


fs.writeFile(`${output}.json`, jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});


}

//fetchdata(apiURL, 'countries');



// Merge de 2 tableaux d'objets

const fs = require ('fs');

const countries = require ("./countries.json");
const countries1 = require('./countries1.json');

let countriesnew = [];

console.log(countries[0]);
console.log(countries1[0]);

countries.map((item) => {

Object.assign(item, { name: item.country })['country'];
delete item['country'];

countries1.map((item1) => {

if (item.iso2.toLocaleLowerCase() == item1.code.toLocaleLowerCase()) {

    Object.assign(item, { phone: item1.phone })['phone'];
    console.log(item.phone)
    countriesnew.push(item);

}

})

});

//console.log(countriesnew);


// stringify JSON Object
var jsonContent = JSON.stringify(countriesnew);
console.log(jsonContent);
 
fs.writeFile("coutriesfinal.json", jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});
