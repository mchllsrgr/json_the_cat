const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      return callback(error);
    } else if (body === '[]') {
      return callback('Breed does not exist');
    } else {
      const data = JSON.parse(body);
      const desc = data[0].description.trim();
      return callback(null, desc);
    }
  });
};


module.exports = { fetchBreedDescription };