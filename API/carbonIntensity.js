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

//LOTR

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://the-one-api.dev/v2/movie", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
