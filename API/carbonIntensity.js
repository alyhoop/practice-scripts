//Carbon Intensity for today

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.carbonintensity.org.uk/intensity/date", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//Carbon Intensity by Fuel Types

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

fetch("https://api.carbonintensity.org.uk/intensity/factors", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
