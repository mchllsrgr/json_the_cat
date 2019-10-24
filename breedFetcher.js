const request = require('request');
const name = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${name}`, (error, response, body) => {
  if (error) {
    throw error;
  } else if (body === '[]') {
    console.log('Breed not found');
  } else {
    const data = JSON.parse(body);
    const desc = data[0].description;
    console.log(desc);
  }
});