var btn = document.querySelector('#buttonForm');
var home = document.querySelector('#home');
var back = document.querySelector('#background');
var whereTitle = document.querySelector('#whereTitle');
var loadTitle = document.querySelector('#loadTitle');
var form = document.querySelector('#form');
var weather2 = document.querySelector('#weather');
var wave = document.querySelector('#wave');


function download(dw){
        btn.value = '';
        btn.classList.add("buttonFormAnimate");

        setTimeout(function changeBack(){
            /* TRANSITION OF THE BLUE BUBBLE */
                whereTitle.classList.add("display");
                back.classList.remove("backImage");
                back.classList.add("backBlue");
                inputForm.classList.add("display");
                btn.classList.remove("visible");
                btn.classList.add("display");
                loadTitle.classList.remove("display");
                wave.classList.remove("display");

            /* CHANGE WEATHER */
            setTimeout(function load(){
                home.classList.add("display");
                changeWeather(dw);
                adaptThermo(temperature);
                weather2.classList.remove("display");
            },2000);
        },2000);
}
