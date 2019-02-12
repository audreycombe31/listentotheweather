var image = document.querySelector('.image');
var weatherImg = document.querySelector('#weatherImg');
var smallElement = document.querySelector('.small-element');
var classBg;
var classWeather;
var thermo = document.querySelector("#thermo");
var thermoWeather;

function adaptThermo(temp){
	if (temp <= 0){
		level="negative";
	}
	else if (temp > 0 && temp <= 10){
		level="low";
	}
	else if (temp > 10 && temp <= 20){
		level="medium";
	}
	else{
		level="high";
	}
	changeThermo(level);
}


function changeWeather(dw){
	classBg = weather2.classList.value;
	classWeather = weatherImg.classList.value;

	switch(dw){
		case 'Snow':
			Snow(classBg);
			break;
		case 'Sun':
			Sun(classBg);
			break;
		case 'Cloud':
			Cloud(classBg);
			break;
		case 'Rain':
			Rain(classBg);
			break;
	}
}

function Rain(classBg){
	thermoWeather = "rain";
	weather2.classList.replace(classBg, "backRain");
    weatherImg.classList.replace(classWeather, "weatherRainImg");
    weatherImg.innerHTML = '<img id="rainImg" src="src/img/umbrella.svg" alt="rain" class="image"><img class="small-element dropImg" src="src/img/drop-rain-ok.svg" alt="">';
}

function Sun(classBg){
	thermoWeather = "sun";
	weather2.classList.replace(classBg, "backSun");
    weatherImg.classList.replace(classWeather, "weatherSunImg");
    weatherImg.innerHTML = '<img id="sunImg" src="src/img/sun-ok.svg" alt="sun" class="image">';
}

function Cloud(classBg){
	thermoWeather = "cloud";
	weather2.classList.replace(classBg, "backCloud");
    weatherImg.classList.replace(classWeather, "weatherCloudImg");
    weatherImg.innerHTML = '<img id="cloudImg" src="src/img/cloud-grey.svg" alt="sun" class="image">';
}

function Snow(classBg){
	thermoWeather = "snow";
	weather2.classList.replace(classBg, "backSnow");
    weatherImg.classList.replace(classWeather, "weatherSnowImg");
    weatherImg.innerHTML = '<img id="snowImg" src="src/img/snow.svg" alt="snow" class="image"><img class="small-element flakeImg" src="src/img/snowflake-ok.svg" alt="">';
}

function changeThermo(level){
	thermo.src = 'src/img/thermometers/thermo-'+thermoWeather+'-'+level+'.svg';
}
