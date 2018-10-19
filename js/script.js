// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var items = ["Rock","Paper","Scissors"]


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function()
{
    
    var compC = items[Math.floor(Math.random()*items.length)];

    var userC = $("#input").val();
    
    $("#computerChoice").text(compC);
    
    $("#userChoice").text(userC);
    
if(userC !== "Rock" && userC !== "Scissors" && userC !== "Paper")
{
    $("#result").text("invalid option");
}
    
if(userC === "Rock" && compC === "Paper")
{
    $("#result").text("Computer Wins");
}
if(userC === "Scissors" && compC === "Paper")
{
     $("#result").text("User Wins");
}
if(userC === "Scissors" && compC === "Rock")
{
     $("#result").text("Computer Wins");
}
if(userC === "Scissors" && compC === "Scissors")
{
     $("#result").text("No one Wins");
}
if(userC === "Paper" && compC === "Paper")
{
     $("#result").text("No one Wins");
}
if(userC === "Paper" && compC === "Rock")
{
     $("#result").text("User Wins");
}
if(userC === "Paper" && compC === "Scissors")
{
     $("#result").text("Computer Wins");
}
if(userC === "Rock" && compC === "Scissors")
{
     $("#result").text("User Wins");
}
if(userC === "Rock" && compC === "Rock")
{
     $("#result").text("No one Wins");
}
});


