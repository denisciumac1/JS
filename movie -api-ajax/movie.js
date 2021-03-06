
// datele pt conectarea cu providerul
const KEY_V3 = '8d5abd2afe0c24423333f41b915c5817';
const KEY_V4 = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDVhYmQyYWZlMGMyNDQyMzMzM2Y0MWI5MTVjNTgxNyIsInN1YiI6IjVjZmZjNzY3OTI1MTQxNWNkN2JiYzllMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._cTdJ2-ZeGF_6LhmlNOGVQ81Cd6Ayj0CtYi_adIRrNc';
const URL_V3 ='https://api.themoviedb.org/3/';
const URL_V4 ='https://api.themoviedb.org/4/';
const URL_IMG ='https://image.tmdb.org/t/p/w300/';

//JSON.parse ("string") -> structured data
//JSON.stringify ("structured data") -> "string"

//filmele populare
function get_popular_movies(){
  var xhr = new XMLHttpRequest();
      xhr.open( "GET", URL_V3 + 'movie/popular?api_key=' + KEY_V3);
      xhr.onload = function(){
        var data =JSON.parse(xhr.responseText);
        for(var i = 0; i <5; i++){
          console.log( data.results[i] );
          var card = document.createElement('div');
              card.className ="card";
              card.style ="width:18 rem";

          var img = document.createElement('img');
              img.className="card-img-top";
              card.appendChild(img);
              img.src = URL_IMG +data.results[i].poster_path;

          var card_body = document.createElement('div');
                  card_body.className="card-body";
                  card.appendChild(card_body);

          var h5 = document.createElement('h5');
                  h5.className ="card-title";
                  h5.innerHTML= data.results[i].title;
                  card_body.appendChild(h5);

          var p = document.createElement('p');
                  p.className ="card-text";
                  p.innerHTML= data.results[i].overview.slice(0, -150) + `...`;
                  card_body.appendChild(p);

          var a = document.createElement('a');
                  a.className ="btn btn-primary stretched-link";
                  a.innerText="Download";
                  card_body.appendChild(a);

        var popular_movies = document.querySelector(".popular-movies");
                  popular_movies.appendChild(card);
        }
        // pornim carouselul -filme populare
        $('.popular-movies').slick({
           dots: true,
           slidesToShow: 3,
           autoplay: true,
        });
      }
      xhr.send();

}
get_popular_movies();


//top cele mai votate 10
function get_top_rated(){
  var xhr = new XMLHttpRequest();
      xhr.open( "GET", URL_V3 + 'movie/top_rated?api_key=' + KEY_V3);
      xhr.onload = function(){
        var data =JSON.parse(xhr.responseText);
        for(var i = 0; i < 15; i++){
          console.log( data.results[i] );
          var card = document.createElement('div');
              card.className ="card";
              card.style ="width:18 rem";

          var img = document.createElement('img');
              img.className="card-img-top";
              card.appendChild(img);
              img.src = URL_IMG +data.results[i].poster_path;

          var card_body = document.createElement('div');
                  card_body.className="card-body";
                  card.appendChild(card_body);

          var h5 = document.createElement('h5');
                  h5.className ="card-title";
                  h5.innerHTML= data.results[i].title;
                  card_body.appendChild(h5);

          var p = document.createElement('p');
                  p.className ="card-text";
                  p.innerHTML=`Vote average: `+ data.results[i].vote_average;
                  card_body.appendChild(p);
          var p2 = document.createElement('p');
                  p2.className ="card-text";
                  p2.innerHTML= `Release date: `+ data.results[i].release_date;
                  card_body.appendChild(p2);

          var a = document.createElement('a');
                  a.className ="btn btn-primary stretched-link";
                  a.innerText="Watch  online";
                  card_body.appendChild(a);

        var top_rated = document.querySelector(".top-rated");
                  top_rated.appendChild(card);
        }
        //pornim carouselul -filme populare
        $('.top-rated').slick({
           dots: true,
           slidesToShow: 3,
           autoplay: true,

        });
      }
      xhr.send();
}
get_top_rated();
