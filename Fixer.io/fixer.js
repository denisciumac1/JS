const KEY = '3a6dd478dcfd49af267781981d69cadd';


//utilizind Fetch in loc de AJAX
function getCurrenciesForToday(){

  fetch(`http://data.fixer.io/api/latest?access_key=${KEY}`)
  .then(function(response){//<--callback

    return response.json();
  })
  .then(function (data) {
    drawCurrenciesForToday(data);
  })

}



/////////////////////////////////
//desenarea graficului
function drawCurrenciesForToday( currencies ){
  console.log( currencies );
  var ctx = document.getElementById('currencies-latest');
  var latestChart = new Chart(ctx,{
  type: 'bar',
  data: {
   labels: Object.keys(currencies.rates).slice(0, 20),
    datasets:[
      {
        label: "Currencies for Today",
       data: Object.values(currencies.rates).slice(0,20)
      }
    ]

  },
  options:{}

});
}

getCurrenciesForToday();
