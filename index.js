$("button").click(function(){
  var player1 = Math.floor(Math.random() *3);
  var player2 = Math.floor(Math.random()* 3);
  $(".p1").attr("src",player1+".png");
  $(".p2").attr("src",player2+".png");
  if(player1== player2){
    $("h2").text("draw");
  }
  else if (player1 == 0 && player2 == 1) {
    $("h2").text("player2 wins");
  }
  else if (player1 == 0 && player2 == 2) {
    $("h2").text("player1 wins");
  }
  else if (player1 == 1 && player2 == 0) {
    $("h2").text("player1 wins");
  }
  else if (player1 == 1 && player2 == 2) {
    $("h2").text("player2 wins");
  }
  else if (player1 == 2 && player2 == 0) {
    $("h2").text("player2 wins");
  }
  else if (player1 == 2 && player2 == 1) {
    $("h2").text("player1 wins");
  }
})
