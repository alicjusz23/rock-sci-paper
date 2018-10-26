$(document).ready(function(){
  $("#rock").click(function(){
    //$(this).css("border", "solid");
    result(2);
  });

  $("#paper").click(function(){
    result(1);
  });

  $("#scissors").click(function(){
    result(0);
  });

});

function result(userTool){
  var toolNames = ["scissors", "paper", "rock"];
  var tools = ["s", "p", "r"];
  var winner;
  //computer is 2nd player here
  var compWins=["sr", "rp", "ps"];

  var compResponse = Math.floor(Math.random() * 3);
  var competition = tools[userTool] + tools[compResponse];

  if(userTool===compResponse){
    winner = "nobody";
  }else if (compWins.includes(competition)){
    winner = "computer"
  } else {
    winner = "user"
  }
  $("#computer").html("<img src='" + toolNames[compResponse] + ".jpg'>");
  $("p").text("Computer's answer: " + tools[compResponse] + " - " + winner + " won!");
}
