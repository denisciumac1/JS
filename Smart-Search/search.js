var search_history =[
  "how much does a js dev earn?",
  "chisinau pizza",
  "reactjs tutorials",
  "angular vs react",
  "zelenskii is president"
];
let input =document.querySelector('input');
    input.addEventListener('click',show_history);
let form =document.querySelector('form');
    form.addEventListener('submit', save_history);

  function save_history(e){
  search_history.unshift( input.value );
  for (var i = search_history.length - 1; i > 0; i--) {
     if (search_history[i] == search_history[i - 1]) search_history.splice( i, 1);
     }
    search_history.pop();
  e.preventDefault(); //ca sa nu se F5 pagina

}

function show_history(){
  var dropdown = document.getElementsByClassName('dropdown-menu')[0];

    // dropdown.innerHTML='';
    $(dropdown).empty();
    // while (children.length -> .removechild())
  for( var i=0; i<search_history.length; i++){
    var link = document.createElement('a');
   link.className="dropdown-item";
   if(search_history.length - i ==3 ){
     link.style.opacity = 0.8;
   }
   if(search_history.length - i ==2 ){
     link.style.opacity = 0.6;
   }
   if(search_history.length - i ==1 ){
     link.style.opacity = 0.4;
   }
   link.innerHTML= '<span class="badge badge-primary" onclick="remove(event)"> x </span>' + search_history[i];
   //de eliminat spanul din textul care este in input ()
   link.addEventListener('click', select);
   dropdown.appendChild(link);
 }

}
show_history();

function select(e){
  console.log(e.innerHTML);
  input.value = e.target.innerText;

}

function remove(e){
  e.stopPropagation(); //nu transmite click-ul parintelui <a>
  console.log(e.target);

}


// tema cu string si cu array
// de prevenit dublarea in cautare
//* case/lower /upper
// de prevenit adaugara space-ui
   //*spatiile de prisossd
