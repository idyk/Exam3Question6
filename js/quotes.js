//List of quotes.
const quote1 =
  "I made this for my project already so I'll have to modify it now.";
const quote2 = "You know what they say.";
const quote3 = "If you're in pain, just keep going anyways.";
const quote4 = "It's ok, things will not get better soon.";
const quote5 = "Just when you think it's done, it's not.";
const quote6 = "When things seem free, you will regret everything instantly.";
const quote7 = "This quote is famous.";
const quote8 = "JavaScript moment";
const quote9 = "I have no other quote ideas.";
const quote10 = "The last quote! We did it.";

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
