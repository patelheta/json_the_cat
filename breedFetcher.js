const request = require('request');
const args = process.argv.slice(2);

let breedType = args[0];
request(`https://api.thecatapi.com/v1/breeds/search?q=${breedType}`, (error, response, body) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log('Breed name is not found. Please try agian!');
    process.exit();
  }
  for (let item of data) {
    console.log(item.description);
  }

});
