function checkweather() {

let cityname = document.querySelector("#tmp1").value

// api with axios

axios.get(`https://api.weatherapi.com/v1/current.json?key=38bf537ef2f0431cbf1134530241807&q=${cityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    let weather = response.data
console.log(weather)
document.getElementById("change").innerHTML = (`Today ${cityname} temp in Celsius ${weather.current.temp_c} , in farhanhightn ${weather.current.temp_f}` )

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

}