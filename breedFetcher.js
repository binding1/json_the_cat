const request = require('request');

const fetchBreedDescription = (breedName, cb) => {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (error) {
      cb(`Failed to request due to: ${error}`, null);
    }

    const data = JSON.parse(body);

    if (data[0]) {
      cb(null, data[0]['description']);
    } else {
      cb('Breed not found', null);
    }
  });
};

module.exports = { fetchBreedDescription };