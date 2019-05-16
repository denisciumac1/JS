var stage = document.getElementById('stage');


function addCoin(){
// stage.innerHTML +=
//   `<div class="coin">
//      <img src="coin.png">
//   </div>`;
  var div = document.createElement('div');
  var img = document.createElement('img');
  div.className ="coin falling";
  img.className ="rotating";
  div.style.left= Math.round(Math.random()*100)+ '%';
  div.style.transform= 'scale('+(Math.random()*1.5 + 0.2)+')';
  div.appendChild(img);
  img.src ="coin.png";
  img.addEventListener('animationend',function(e){
    if(e.animationName=='rot'){//verificam ce anim. sa incheiat
    e.target.className='rotX';
    }
  });
  stage.appendChild(div);
}

function removeCoin(){

}
// // clic modeda
// 1-ea dispare removechild
// 2-creste cantitatea
// 3-sa adaoge intr-un div
// 4-dupa ce cade sa o putem culege
