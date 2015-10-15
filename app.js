//Blackjack, 10/


console.log("Javascript activated.")

//++++++++++++++++++++++GLOBAL VARIABLES++++++++++++++++++++++++++++++++++++
var myConsole = $("#console")  //this is where I will pass instructions to the player
var currentDeck = [] //this will be the current shuffled deck
var dealerCard1 = $("#dealer-card1") //this is how the html element will be edited
var dealerCard2 = $("#dealer-card2") //same as above for the dealers second card
var yourCard1 = $("#your-card1") //same as above for your first card
var yourCard2 = $("#your-card2") //and your second card
var yourTotal = 0 //this will be the variable that keeps count of your hands value
var dealerTotal = 0 //this will be the dealer's total score
var yourCardsArray = [] //this will keep track of the cards you were dealt
var dealerCardArray = [] //this will keep track of the ards the dealer was dealt
var playedCards = [] //this is a place to put the cards played from the deck, will be replaced by above arrays
var chipCount = 0 //this is to keep track of how many chips you have

//++++++++++++++++++++MAKE A DECK OF CARDS!+++++++++++++++++++++++++++++++++

//Fun global variables to make the deck
cardArray = [];
cardValues = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
suits= ["♣","♦","♥","♠"];
//Individual card constructor
var Card = function(){
  this.name = ""
  this.number = 0
  this.hidden = false
}
//The function below will create a deck of cards.  It will use
//NESTED for-loops to iterate through 2 arrays!
var makeDeck = function () {
  for (var j = 0; j < suits.length; j++) {
    for (var i = 0; i < cardValues.length; i++) {
      thiscard = new Card
      thiscard.hidden = false
      thiscard.name = cardValues[i] + suits[j];
        if(cardValues[i] === "A"){thiscard.number = 11;
        }else if(cardValues[i] === "K" || cardValues[i] === "J" || cardValues[i] === "Q" ) {thiscard.number = 10;
        }else {thiscard.number = parseInt(cardValues[i])}
      cardArray.push(thiscard)
    }
  }
}

//+++++++++++++++++++++++SHUFFLE THE DECK+++++++++++++++++++++++++++++++++++++

//use the shuffle function from our mem game, thanks guys wdi instructors!
function shuffle(o) {
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
		return o;
  }
//this function can be used to make a shuffled deck, just set it to a variable
var shuffleDeck = function () {
  var shuffledDeck = shuffle(cardArray);
  return shuffledDeck;
}


//+++++++++++++++++++++++CREATE DEAL FUNCTION++++++++++++++++++++++++++++++

//Shuffle the deck each time you deal cards.
var dealCards = function () {
  currentDeck = shuffleDeck();
  var cards = [yourCard1,dealerCard2,yourCard2,dealerCard1] //temp array for looping

  //Move card from the current deck to an array of played cards in a looping fashion.
  for (var i = 0; i < cards.length; i++) {
    playedCards.push(currentDeck.pop());
    $(cards[i]).text(playedCards[i].name);
  }
  //Using timeout, reveal each card one at a time (except dealer's first) on the page.

  setTimeout(function () {$(cards[0]).attr("class","card")},500);
  setTimeout(function () {$(cards[1]).attr("class","card")},1000);
  setTimeout(function () {$(cards[2]).attr("class","card")},1500);

  //Push the cards into these arrays for finding the score later
  yourCardsArray.push(playedCards[0],playedCards[2])
  dealerCardArray.push(playedCards[1],playedCards[3])

  //Tell the player what to do in the fake console.
  setTimeout(function () {$(myConsole).text("You have " + totalScoreFinder(yourCardsArray) + ", do you hit or stand?");
  $(myConsole).css("color","yellow")},1600)

}

//+++++++++++++++CREATE FUNCTIONS TO GET YOUR TOTAL SCORE+++++++++++++++++++

//This is going to add up the number values of the cards in the array passed.
var totalScoreFinder = function(array){
  var scoreCalculator = 0
  for (var i = 0; i < array.length; i++) {
    scoreCalculator += array[i].number
  }
//If the total is above 21, this checks for aces and turns them into 1s.
  if (scoreCalculator > 21){
    for (var j = 0; j < array.length; j++) {
      console.log(scoreCalculator)
      if(array[j].number === 11){
        scoreCalculator = scoreCalculator - 10
      }
    }
  }
  return scoreCalculator
}










//++++++++++++++++++++++ADD EVENT LISTENERS++++++++++++++++++++++++++++++++++




















//for testing purposes only!
makeDeck()
dc2 = document.getElementById("dealer-card1")
dc2.innerHTML = cardArray[4].name
currentDeck = shuffleDeck()

































//secrets
left = 1000

var walkingPony = function() {
  var pony = $('#pony');
  left = left - 10
  $(pony).css("left", left + "px")
  $(pony).css("top", "150px")
  if (left < -50000) {
    left = 1000
  }
};

setInterval(walkingPony,30)
