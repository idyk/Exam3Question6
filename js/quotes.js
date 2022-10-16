//List of quotes.
const quote1 = "I made this for my project already.";
const quote2 = "Now I have to make something else.";
const quote3 = "At least it makes this homework easier.";
const quote4 = "Ahhhhhhhhhhhhhh";
const quote5 = "Great...";
const quote6 = "Wonder what I'll do now.";
const quote7 = "Maybe something to determine the quote instead.";
const quote8 = "Yeah that should work.";
const quote9 = "Are these even quotes?";
const quote10 = "I guess so...";

//Store quotes into array.
const quoteList = [
  quote1,
  quote2,
  quote3,
  quote4,
  quote5,
  quote6,
  quote7,
  quote8,
  quote9,
  quote10,
];

//Get the button from the html.
document.getElementById("quoteGen").addEventListener("click", alertUserQuote);

//Generate a random number within the range from 0 to the length of the array.
//Use floor so it isn't a decimal.
//Alert the user with the message.
function alertUserQuote() {
  let randNum = Math.floor(Math.random() * quoteList.length);
  console.log(randNum);
  console.log(quoteList[randNum]);
  document.getElementById("quoteIndex").innerHTML =
    "You are on quote number " + (randNum + 1) + "!";
  alert(quoteList[randNum]);
}
