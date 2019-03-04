function play( song ){
    var div_player = document.getElementById('player');
    switch (song){
      case 1: var url = "https://www.youtube.com/embed/E9eAshaPvYw"; break;
      case 2: var url = "https://www.youtube.com/embed/qlzVPauUgw8"; break;
      case 3: var url = "https://www.youtube.com/embed/dRb37EmoFB0"; break;
      case 4: var url = "https://www.youtube.com/embed/xCt1bOOK1dA"; break;
      case 5: var url = "https://www.youtube.com/embed/6NqKrhmnVNY"; break;
       default:     
    }
    var iframe = `<iframe width="560" height="315" src="${url}?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    div_player.innerHTML = iframe;
}
