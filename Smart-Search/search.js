var search_history =[
  "how much does a js dev earn?",
  "chisinau pizz",
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
  // de prevenit dublarea in cautare
  //* case/lower /upper
  // de prevenit adaugara spacului
     //*spatiile de prisos
  e.preventDefault(); //ca se nu se F5 pagina
}
function show_history(){
  var dropdown =document.getElementsByClassName('dropdown-menu')[0];
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
   link.addEventListener('click', select)
   dropdown.appendChild(link);
 }

}
show_history();

function select(e){
  console.log(e.innerHTML);
  input.value = e.target.innerHTML;
}

function remove(e){
  e.stopPropagation(); //nu transmite click-ul parintelui <a>
  console.log(e.target);
}





// tema cu string si cu array
