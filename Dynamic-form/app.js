function showQuestion(index){
  let form = document.createElement('form');
  let h2   =document.createElement('h2');
     form.appendChild(h2);
     h2.innerHTML = questions[index].question;
  let hr  = document.createElement('hr');
     form.appendChild(hr);


     for(let a=0; a<questions[index].answers.length; a++){
      //  crearea + append label
      //  crearea + append input
      let label  = document.createElement('label');
               form.appendChild(label);
      let input = document.createElement('input');
               input.type ='checkbox';
      let text = document.createTextNode(questions[index].answers[a]);
                 label.appendChild(input);
                 label.appendChild(text);
      let br  = document.createElement('br');
                 form.appendChild(br);

    }


      //find by id -> content
      //.appendChild->form
      //.removechild(), .swapchild()
      var div = document.getElementById('content');
         content.innerHTML = ``;
         div.appendChild(form);

     var span = document.getElementById('number');
         span.innerHTML=(current_question + 1);



}
showQuestion(0);


var current_question = 0;

function prevQuestion(){
  if(current_question>0){
  current_question--;
  showQuestion(current_question);
 }
}
function nextQuestion(){
  if(current_question<questions.length -1){
  current_question++;
  showQuestion(current_question);
  }
  if(current_question == questions.length -1){
    var button = document.getElementById('btn2');
    button.disabled = true;
  }else{
    button.disabled = false;
  }
  
}
  showQuestion(current_question);
  //
  // <div id="content">
  //   Loading
  //   <form>
  //       <h2>Intrebarea?</h2>
  //       <hr>
  //       <label>
  //         <input type="checkbox">Varianta 1
  //       </label>
  //            <br>
  //       <label>
  //         <input type="checkbox">Varianta 2
  //       </label>
  //   </form>
  // </div>
