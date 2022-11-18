const request = require('request');

const args = process.argv.slice(2);

const catUrl = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;

request(catUrl, (error, response, body) => {
  if (error) {
    console.log('error', error);
    return;
  }

  const data = JSON.parse(body);

  if (!data[0]) {
    console.log('Breed not found.');
    return;
  }

  console.log(data[0]['description']);
});
