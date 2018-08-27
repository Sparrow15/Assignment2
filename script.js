/*
    Creating a trivia function
    Creating a small table that contains precoded movie titles and years.
    You will then create inputs that prompt the user for new movie titles and years,
    as well as a button that will add this information to the table.
    You will also create a button that will toggle between showing a photo and
    a video clip of your celebrity on youtube
*/

//const videoButton = document.getElementById("videoButton");
//const seagalPic = document.getElementById("seagalPic");
//create celebrityVideo, table Button, movieTable, titleInput, yearInput and trivia variables for DOM manipulation using above code as reference


//constant variables pointing to add and remove videos buttons
//const addButton = document.getElementById("addMovie");
//const removeButton = document.getElementById("removeMovie");
const triviaButton=document.getElementById("playTrivia");

//Function and event listener for adding movies to the list
//addButton.addEventListener("click", addMovie(){
    
    
//});

//Function and event listener to play trivia game
triviaButton.addEventListener("click" ,  playTrivy);
function playTrivy(){
    alert ("In what year did Tom Cruise acted the movie 'War of the Worlds?\n A: 2005\n B: 2009\n C:2014\n D:2017");
}
//triviaFunc = () => {
//  alert("Please enter the letter for the corresponding answer.");
//  const value1 = prompt("What was Steven Seagal's first movie?   a: Above the Law, b: Under Siege, c: The Glimmer Man");
//  if(value1 === "a"){
//    alert("You got it right!");
//  } else {
//    alert("Incorrect, Please try again.")
//    triviaFunc();
//  }
//
//  const value2 = prompt("How old is Steven Seagal?   a: 57, b: 72, c: 65" );
//  //use value collected from prompt, if else statements, operators, and alerts to handle trivia question
//
//  const value3 = prompt("What 2 martial arts forms does Seagal know? a: Akido, b: Muay Thai, c: Boxing, d: Judo");
//  //use value collected from prompt, if else statements, operators, and alerts to handle trivia question
//
//}
//
//trivia.addEventListener("click", function(){
////call triviaFunc
//});
//
//videoButton.addEventListener("click", function(){
////toggle celebrityPic and celebrityVideo classes with button functionality
//});
//
//tableButton.addEventListener("click", function(){
//  const row = movieTable.insertRow(1);
//  const cell1 = row.insertCell(0);
//  // create variable to insert new cell similar to code above
//  cell1.innerHTML = titleInput.value;
//  // add yearInput value to cell you just created
//  //call resetInputValues function;
//});

//resetInputValues = () => {
  //define function to reset input values
//}//;
