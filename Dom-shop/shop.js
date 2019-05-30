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
            a.href = `#${product.id}`;
            card_body.appendChild(a);


  var row = document.querySelector("#products .row2");
  row.appendChild(card);

  a.addEventListener('click', addToCart);


}

function addToCart(e){
  let product_id =  e.target.href.split("#").pop();

  if(localStorage.getItem('cart')!=null){
    var products_cart = localStorage.getItem('cart').split(",");
  }else{
    var products_cart = [];
  }

  products_cart.push(product_id);
  localStorage.setItem('cart', products_cart);

  showMessage("Your product was added to cart!")
}
function showMessage(){

var message = document.createElement('div');
    message.className ="alert alert-warning alert-dismissible fade show";

var strong= document.createElement('strong');
          strong.innerText="Success!";
         message.appendChild(strong);
let x  = document.createTextNode("Aici mesage.");
         message.appendChild(x);

var button= document.createElement('button');
          button.className="close" ;
          button.setAttribute('data-dismiss',"alert");
           message.appendChild(button);

var span= document.createElement('span');
          span.innerHTML=`&times;`;
          button.appendChild(span);
          span.setAttribute('aria-hidden',"true");
var products = document.querySelector("#products");
            products.appendChild(message);

setTimeout(function(){
   products.removeChild(message);
  } ,5000);
}


function renderProductList(){
    for(var i=0; i<products.length; i++){
        renderProduct(products[i]);
    }
}

function showCart(){

  if(localStorage.getItem('cart')!=null){
    var products_cart = localStorage.getItem('cart').split(",");
  }else{
    var products_cart = [];
  }

  var a = document.createElement('a');
              a.className ="btn btn-primary btn-lg rounded-pill";
              a.href = `#`;
  var i = document.createElement('i');
              i.className ="fas fa-shopping-cart";
              a.appendChild(i);
    let z  = document.createTextNode(`items:${products_cart.length}`);
               a.appendChild(z);
  var cart = document.querySelector("#products .py-5 .col-2");
        cart.appendChild(a);
}
  showCart();
  renderProductList();
