
function convertToCelsius (temp) {
  var celsius = ((temp - 32) * (5/9))
  return Math.round(celsius)
}

function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c <= 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

describe ('celsius converter', function () {
  it ('should get correct answer', function () {
    Test.assertEquals(weatherInfo(50), '10 is above freezing temperature')
    Test.assertEquals(weatherInfo(23),  '-5 is freezing temperature')
 })
})
