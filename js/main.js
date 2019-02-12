var city;
var city1 = document.querySelector('#inputForm');
var city2 = document.querySelector('#weatherInputForm');
var btnSubmit = document.querySelector("#buttonForm");
var musicIframe = document.querySelector("#musicIframe");
var dataJson;
var weather;
var weatherCateg;
var temperature;
var musicName;
var musicLink;
var randomMusic;
var musicTitle = document.querySelector('#musicTitle');
var deg = document.querySelector('#deg');
var dataWeather;
var weatherBtn = document.querySelector('#weatherButtonForm');
var flag;
var musicDuration;
var level;

weatherBtn.addEventListener("click", request);
if (weather2.classList.value == 'display')
	btnSubmit.addEventListener("click", request);

function request(e){
	e.preventDefault();

	if (weather2.classList.value == 'display'){
		flag = 1;
		city = city1.value;
	}
	else{
		flag = 0;
		city = city2.value;
	}

	fetch('http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric&appid=5a54f8a332ac50f8372c4bfbb4bf4c10', {mode:'cors'}).then(function(response){
		return response.json();
	}).then(function(res){
		dataJson = res;
	}).then(function(result){
		searchWeather();
		searchTemp();
	}).catch(function(error) {
		if (flag == 1)
			var err = document.querySelector('#error1');
		else
			var err = document.querySelector('#error2');
		err.classList.add('errorAnim');
		setTimeout(function music(){
			err.classList.remove('errorAnim');
		},2000);
    });
}

//weather given by the API
function searchWeather(){
	weather = dataJson.weather[0].main;
	selectWeather();
}

//temperature given by the API
function searchTemp(){
	temperature = dataJson.main.temp;
	deg.innerHTML = temperature + "°C";
	adaptThermo(temperature);
}

//Decide the weather category
function selectWeather(){
	switch(weather){
		case 'Snow':
			weatherCateg=dataMusic.snow;
			dataWeather = 'Snow';
			break;
		case 'Clear':
			weatherCateg=dataMusic.sun;
			dataWeather = 'Sun';
			break;
		case 'Clouds':
			weatherCateg=dataMusic.cloud;
			dataWeather = 'Cloud';
			break;
		case 'Rain':
			weatherCateg=dataMusic.rain;
			dataWeather = 'Rain';
			break;
		case 'Drizzle':
			weatherCateg=dataMusic.rain;
			dataWeather = 'Rain';
			break;
	}
	selectMusic();
}

function selectMusic(){
	randomMusic = Math.floor((Math.random() * weatherCateg.length));
	musicName = weatherCateg[randomMusic].name;
	musicTitle.innerHTML = musicName;
	musicLink = weatherCateg[randomMusic].link;
	musicDuration = weatherCateg[randomMusic].duration;
	requestMusic();
}

//Choose the music corresponding to the weather category
function requestMusic(){
	if(flag==1){
		download(dataWeather);
	}
	else{
		changeWeather(dataWeather);
	}
	setTimeout(function music(){
		musicIframe.src = musicLink;
	},1000);
	setTimeout(function changeMusic(){
		selectMusic();
	}, musicDuration);
}
