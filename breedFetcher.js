const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      process.exit();
    }
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback('Breed name is not found. Please try agian!', null);
      process.exit();
    }
    for (let item of data) {
      callback(null, item.description);
    }

  });
};
module.exports = { fetchBreedDescription };

// const breedDescription = fetchBreedDescription('Siberian', (error, description) => {
//   if (error) {
//     console.log('Error fetch details:', error);
//   } else {
//     console.log(description);
//   }
// });
// console.log(breedDescription);
// const args = process.argv.slice(2);

// let breedType = args[0];


