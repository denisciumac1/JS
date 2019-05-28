function renderProduct(product){

var card = document.createElement('div');
    card.className ="card col md-2";
    card.style ="width:18 rem";

var img = document.createElement('img');
    img.src=product.photos[0];
    img.className="card-img-top";
    card.appendChild(img);

var card_body = document.createElement('div');
    card_body.className="card-body";
    card.appendChild(card_body);

var h5 = document.createElement('h5');
    h5.className ="card-title";
    h5.innerText=product.name;
    card_body.appendChild(h5);

var p = document.createElement('p');
        p.className ="card-text";
        p.innerText=product.price.value+product.price.currency;
        card_body.appendChild(p);

var p = document.createElement('p');
                p.className ="card-text";
                p.innerText=product.mass.value+product.mass.unnit;
                card_body.appendChild(p);

var a = document.createElement('a');
            a.className ="btn btn-primary stretched-link";
            a.innerText="Cumpara";
            card_body.appendChild(a);


  var row = document.querySelector("#products .row");
  row.appendChild(card);

  a.addEventListener('click', addToCart);


}

function addToCart(e){
  alert();
  //index -> dom-ul unui products
  e.target -> a care a fost clickat
  <a href ="#p1"  ---->localStorage

}

function renderProductList(){
    for(var i=0; i<products.length; i++){
        renderProduct(products[i]);
    }
}
  renderProductList();
