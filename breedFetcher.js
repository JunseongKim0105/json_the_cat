const request = require('request');
const fs = require('fs');
const breed = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    function (error, response, body) {
      const cats = JSON.parse(body);
      const cat = cats[0];
      let description = 'Breed not found';
      if (cat) {
        description = cat.description;
      }
      callback(error, description);
    }
  );
};

module.exports = { fetchBreedDescription };
// JSON = Javascript Object Notation
// console.error('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the Google homepage.

// Convert JSON to actual js object or array
