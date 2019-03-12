var bullets = 10;
function addDuck(){
var lake = document.getElementById('lake');
var duck =`<div id="duck" class="duck" onclick="killDuck()"></div>`;
lake.innerHTML += duck;
}

function moveDuck(){
var duck = document.getElementById('duck');
    duck.style.bottom = randomBottom()+'px';
}
function audioQuack(){
var aux = document.getElementById('aux');
var audio = ` <audio src="kreak.mp3"autoplay></audio>`;
aux.innerHTML = audio;
}
function randomBottom(){
  var bot = Math.floor(Math.random()*200 );
  return bot;
}
setInterval(moveDuck, 2000);
function killDuck(){
  audioQuack();
}
/////////////////////////START GAME////////////////////
addDuck();

function show(){
var statistics = document.getElementById('statistics');
statistics.innerHTML += `Bullets remaining: ${bullets}`;
}
show();
