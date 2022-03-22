// get location
navigator.geolocation.getCurrentPosition(function (position) {
  // fetch weather api and convert to usable data
  setInterval(setUp, 60000);
  function setUp() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial&appid=e881ce0fbe630b6a3aa3e8c7de620b51`
    )
      .then((res) => res.json())
      .then(function (data) {
        // images
        let sunnyBackGround =
          "https://lh3.googleusercontent.com/CnHg3skxcIhFKh5oE_ZV61x-a-tqWKIWC04a4hWkmQymuBRGlp3Kgnr_d3bEj-jgvPZAM1kh4nkpALUr0bDaUJdzPQ=w640-h400-e365-rj-sc0x00ffffff";
        let prtlyCldy =
          "https://1.bp.blogspot.com/-2ya1zzYUjbQ/XshshSkYg2I/AAAAAAAA72o/yyPOYmri6Dw7HZLkbKLzBHp61OnLueZbwCLcBGAsYHQ/s1600/download.jpeg";
        let scatterdcld =
          "https://media.istockphoto.com/photos/cirrocumulus-clouds-cloudscape-picture-id645173476?b=1&k=20&m=645173476&s=170667a&w=0&h=0wdytj1LA3mA1Jzp0j6_rgip60BxH9e5BAAE_vFlJQE=";
        let brknCld =
          "https://media.istockphoto.com/photos/broken-sky-picture-id1076493224?k=20&m=1076493224&s=170667a&w=0&h=_CTnv4p2LwYiD8rtzC2N7teSQLIRDlYhvF3PHiKFTog=";
        let drizzle =
          "https://media.istockphoto.com/videos/raindrops-on-a-window-blue-sky-and-clouds-next-to-glass-of-window-video-id1338648670?s=640x640";
        let rain =
          "https://st.depositphotos.com/2012555/2871/i/600/depositphotos_28718553-stock-photo-rain.jpg";
        let thunderStorm =
          " https://images.news18.com/ibnlive/uploads/2021/07/1627056776_clouds.jpg";
        let snow =
          "https://img.resized.co/lovindublin_com/eyJkYXRhIjoie1widXJsXCI6XCJodHRwczpcXFwvXFxcL2ltYWdlcy5sb3ZpbmR1Ymxpbi5jb21cXFwvdXBsb2Fkc1xcXC9pbWFnZXNcXFwvdXBsb2Fkc1xcXC8yMDE3XFxcLzAyXFxcL19yZWxhdGVkRW50cnlJbWFnZTJ4XFxcL3NodXR0ZXJzdG9ja18zNDA3NjIyODYuanBnXCIsXCJ3aWR0aFwiOjY0NyxcImhlaWdodFwiOjM0MCxcImRlZmF1bHRcIjpcImh0dHBzOlxcXC9cXFwvZDI2aGUwMzhhNzBkZ3MuY2xvdWRmcm9udC5uZXRcXFwvd3AtY29udGVudFxcXC90aGVtZXNcXFwvbG92aW5cXFwvYXNzZXRzXFxcL2ltZ1xcXC9jYXJkLWRlZmF1bHQtbG92aW4tZHVibGluLnBuZ1wiLFwib3B0aW9uc1wiOltdfSIsImhhc2giOiJjMjZmMzMwMjBjNDVjMDcyMzk4NTZiZjYzZGJkOWZjMmZiNTA4Yzc0In0=/it-s-snowing-in-dublin-right-now.jpg";
        let mist =
          "https://www.irishtimes.com/polopoly_fs/1.4697059.1633936352!/image/image.jpg_gen/derivatives/box_620_330/image.jpg";
        let overcast =
          "https://s3.envato.com/files/135987809/Image%20Preview.jpg";
        let duststrm = "https://www.rmets.org/sites/default/files/haboob.jpg";
        let valcano =
          "https://cbsnews1.cbsistatic.com/hub/i/2017/11/28/15844c28-659d-45aa-ac89-286fc4e7fdd8/indonesia-bali-volcano-2017-11-28t104255z.jpg";
        let tornado =
          "https://www.amnh.org/var/ezflow_site/storage/images/media/tornado-leading-image/1666587-1-eng-US/tornado-leading-image.jpg";
        let sql =
          "https://i.pinimg.com/originals/a9/c5/30/a9c5302c7afd27f7ac3bb6c089024839.jpg";
        let icon =
          "https://api.openweathermap.org/img/w/" +
          data.weather[0].icon +
          ".png";
        // weather data
        let wCondition = data.weather[0].main;
        let wDescription = data.weather[0].description;
        let temp = data.main.temp;
        let wind = data.wind.speed;
        let location = data.name;
        let feelsLike = data.main.feels_like;
        // uppercase first letter
        function upperUp(des) {
          let desArray = des.split("");
          desArray[0] = desArray[0].toUpperCase();
          for (i = 1; i < desArray.length; i++) {
            if (desArray[i - 1] === " ") {
              desArray[i] = desArray[i].toUpperCase();
            }
          }
          desString = desArray.join("");
          return desString;
        }
        location = upperUp(location);
        wDescription = upperUp(wDescription);
        // picks background image from weather data
        function picBkGrnd(condition, description) {
          if (condition === "Clear") {
            return sunnyBackGround;
          }
          if (condition === "Clouds" && description === "Few Clouds") {
            return prtlyCldy;
          }
          if (condition === "Clouds" && description === "Overcast Clouds") {
            return overcast;
          }
          if (condition === "Clouds" && description === "Sacattered Clouds") {
            return scatterdcld;
          }
          if (condition === "Clouds" && description === "Broken Clouds") {
            return brknCld;
          }
          if (condition === "Drizzle") {
            return drizzle;
          }
          if (condition === "Rain") {
            return rain;
          }
          if (condition === "Thunderstorm") {
            return thunderStorm;
          }
          if (condition === " Snow") {
            return snow;
          }
          if (
            condition === "Mist" ||
            condition === "Fog" ||
            condition === "Haze" ||
            condition === "Smoke"
          ) {
            return mist;
          }
          if (condition === "Dust" || condition === "Sand") {
            return duststrm;
          }
          if (condition === "Ash") {
            return valcano;
          }
          if (condition === "Squall") {
            return sql;
          }
        }
        // adding data to html document
        function setAts() {
          document
            .getElementById("background")
            .setAttribute(
              "style",
              `background-image:url(${picBkGrnd(wCondition, wDescription)});`
            );
          document.getElementById("icon").setAttribute("src", `${icon}`);
          document.getElementById("temp").innerHTML = `${temp}°F`;
          document.getElementById("wind-speed").innerHTML = `${wind} MPH`;
          document.getElementById(
            "weather-condition"
          ).innerHTML = `${wDescription}`;
          document.getElementById("area").innerHTML = `${location}`;
          document.getElementById("feels-like").innerHTML = `${feelsLike}°F`;
        }
        setAts();
      });
  }
  setUp();
  // clock
  setInterval(clock, 500);
  function clock() {
    let time = "";
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let amPm = "";
    if (hour > 12) {
      amPm = "Pm";
    } else {
      amPm = "Am";
    }
    if (min < 10) {
      min = `0${min}`;
    }
    time = `${hour % 12}:${min} ${amPm}`;
    document.getElementById("time").innerHTML = `${time}`;
  }
});


