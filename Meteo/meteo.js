function addFlake(){
  var div_map = document.getElementById('map');
  var l = randomLeft();
  div_map.innerHTML +=`<div style="left:${l}px;" class="flake"></div>`;
}

function randomLeft(){
  var window_width = innerWidth; //latimea interna a ferestrei
  var left = Math.floor(Math.random()*window_width);
  return left; //returnam valoarea data inapoi
}



setInterval(addFlake, 500);

// addFlake();
