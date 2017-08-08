//Create Life Points

var mylifePoints = 20;
var currentLife = setInterval(function() {
    document.getElementById('currentLife').innerHTML = mylifePoints;
}, 100);

var lifePointsBank = 2;
var lifeBank = setInterval(function() {
    document.getElementById('lifeBank').innerHTML = lifePointsBank;
}, 100);

//document.getElementById("lifePoints").innerHTML = mylifePoints;

//Create Starting Deck (Matt Damon Cards)
var myDeck = 0;

function startDeck() {
	if (myDeck === 0) {
	var mattCards = [
		{title: 'Idiot', fightingValue: -1, ability: 'null', destroyPoints: 1, numCards: 5},
		{title: 'Starving', fightingValue: 0, ability: null, destroyPoints: 1, numCards: 7},
		{title: 'Harvesting', fightingValue: 0, ability: 'addOneCard', destroyPoints: 1, numCards: 1},
		{title: 'Endurance', fightingValue: 1, ability: null, destroyPoints: 1, numCards: 3},
		{title: 'Brilliance', fightingValue: 2, ability: null, destroyPoints: 1, numCards: 1}
	]

	var deck = [];
	for(var i = 0; i < mattCards.length; i++) {
		var mattCard = mattCards[i];
		for(var x = 0; x < mattCard.numCards; x++) {
			deck.push(mattCard);
		}
	}
	
	return deck;
	} else {
		return null;
	}
}

myDeck = new startDeck();

var selectedCard = [];
var myDeckShuffle = 0;

function shuffleCall() {
	document.getElementById('shuffled').innerHTML = "Shuffled!";
}

function shuffleEDCall() {
	document.getElementById('shuffleED').innerHTML = "Shuffled!";
}

function shuffleAgeCall() {
	document.getElementById('shuffleAge').innerHTML = "Shuffled!";
}

//Shuffle And Deal Starting Deck
function stackShuffle(n) {
	if (myDiscard.length > 0) {
		reshuffle();
		for(var i = 0; i < n; i++) {
			for(var j = 0; j < myDeck.length; j++) {
				var k = Math.floor(Math.random() * myDeck.length);
				var temp = myDeck[j];
				myDeck[j] = myDeck[k];
				myDeck[k] = temp;
			}
		}
	shuffleCall();
	document.getElementById('addCard').innerHTML = "";
	document.getElementById('empty').src="cardimg/matt-card-back.jpg";
	} else if (myDeck.length === 0 || myDeckShuffle === 0) {
		myDeckShuffle++;
		for(var i = 0; i < n; i++) {
			for(var j = 0; j < myDeck.length; j++) {
				var k = Math.floor(Math.random() * myDeck.length);
				var temp = myDeck[j];
				myDeck[j] = myDeck[k];
				myDeck[k] = temp;
			}
		}
	shuffleCall();
	document.getElementById('addCard').innerHTML = "";
	document.getElementById('empty').src="cardimg/matt-card-back.jpg";
	} else {
		return null;
	}
}

function stackCardCount() {
	return myDeck.length;
}

//These Are Different Stacks
//My Hand
var myHand = [];

/**
* This function is used to update the values within the selCard option dropdown with a given deck of cards.
 */
function updateSelectCardDropdown(deckOfCards){
	
	var selCardDropdown = document.getElementById('selCard');
	selCardDropdown.innerHTML = '';
	
	for(var i = 0; i < deckOfCards.length; i++){
		var card = deckOfCards[i];
		console.log(card[0].title);
		if(card[0].title == "Idiot") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/idiot-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Starving") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/starving-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Harvesting") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/harvesting-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Endurance") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/endurance-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Brilliance") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/brilliance-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "ExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-weapon.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-recycle.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-repeat.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-contact.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-optimization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-prioritization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-optimization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-contact.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-tools.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-exchange.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-recycle.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-repeat.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-minusphase.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarSeven") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CargoHaul") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/cargo-haul-weapon.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "Moronic") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/moronic-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Suicidal") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/suicidal-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Hungry") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-hungry-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Stupid") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/stupid-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Hungry") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/hungry-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Distracted") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/distracted-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Scared") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/scared-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Stupid") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-stupid-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Tired") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-tired-card.png.png" class="cardselected"></img></a>';
		}
		selCardDropdown.innerHTML += cardButton;
	}
}

var logCard = [];

function cardClicked (cardIndex) {
	console.log(cardIndex);
	logCard = [];
	logCard.push.apply(logCard, arguments);
}

var drawPoints = 0;
function drawTotal () {
	drawPoints++;
	var drawAmount = inPlay[0][0].drawAmount;
	var drawRemaining = drawAmount - drawPoints;
	document.getElementById('drawTotal') //= drawRemaining;
	return drawRemaining;
}

function moveToHand () {
	if (myDeck.length > 0 && totalPoints < edCardValue && inPlay.length > 0 && drawPoints < inPlay[0][0].drawAmount) {
		myHand.push(myDeck.splice(0,1));
		updateSelectCardDropdown(myHand);
		totalDamagePoints();
		drawTotal();
		ageEnable();
		document.getElementById('shuffled').innerHTML = "";
		document.getElementById('shuffleAge').innerHTML = "";
	}
	else if (myDeck.length > 0 && myHand.length === 0 && inPlay.length > 0 && drawPoints < inPlay[0][0].drawAmount) {
		myHand.push(myDeck.splice(0,1));
		updateSelectCardDropdown(myHand);
		totalDamagePoints();
		drawTotal();
		ageEnable();
		document.getElementById('shuffled').innerHTML = "";
		document.getElementById('shuffleAge').innerHTML = "";
	}
	else {
		document.getElementById('empty').src="cardimg/empty-cards.jpg";
		//return null;
	}
}

//Aging Card

function ageEnable () {
	var lastCard = myHand.length - 1;
	var ageCard = myHand[lastCard];
	if (ageCard.type == "Aging") {
			if(ageCard.ability == "minusOneLife") {
				if(mylifePoints > 0) {
				mylifePoints--;
				lifePointsBank++;
				} else if (mylifePoints < 1) {
					alert ("Game Over");
				} else {
					return null;	 
				}
			} else if (ageCard.ability == "minusTwoLife") {
				if (mylifePoints > 1) {
				mylifePoints -= 2;
				lifePointsBank += 2;
				} else if (mylifePoints < 2) {
					alert ("Game Over");
				} else {
					return null
				}
			} else if (ageCard.ability == "highestCard") {
				for (var i = 0; myHand.length; i++) {
					var fightArray = [];
					fightArray.push(myHand[i].fightingValue);
					function getMax (fightArray) {
						var max = Math.max.apply(null, fightArray)
						totalPoints -= max;
						totalDamagePoints();
					}
				}
			} else if (ageCard.ability == "stop") {
				document.getElementById("myHand").disabled = true;
			} else {
				return null;
			}
	} else {
		return null;
	}
}

//Tap A Card

function tapCard () {
    var myHandIndex = document.getElementById('selCard');
	var selectedCard = myHand[logCard][0];
	if(selectedCard) {
		updateSelectCardDropdown(myHand);
			if(selectedCard.ability == "addOneLife") {
				if(mylifePoints < 22) {
				mylifePoints++;
				lifePointsBank--;
				} else {
				return null;	 
				}
			} else if (selectedCard.ability == "addTwoLife") {
				if (mylifePoints < 21) {
				mylifePoints += 2;
				lifePointsBank -= 2;
				} else {
					return null
				}
			} else if (selectedCard.ability == "addOneCard") {
				drawPoints--;
				moveToHand();
			} else if (selectedCard.ability == "addTwoCard") {
				drawPoints -= 2;
				moveToHand();
				moveToHand();
			} else if (selectedCard.ability == "trashOneCard") {
				document.getElementById('trash').style.display = "block";
			} else if (selectedCard.ability == "copyCard") {
				document.getElementById('copy').style.display = "block";
			} else if (selectedCard.ability == "exchangeOneCard") {
				document.getElementById('exchange').style.display = "block";
			} else if (selectedCard.ability == "exchangeTwoCard") {
				document.getElementById('exchange').style.display = "block";
				document.getElementById('exchangeTwo').style.display = "block";
			} else if (selectedCard.ability == "belowPile") {
				document.getElementById('belowThePile').style.display = "block";
			} else if (selectedCard.ability == "doubleCard") {
				document.getElementById('double').style.display = "block";
			} else if (selectedCard.ability == "sortThreeCards") {
				sortThree();
			} else if (selectedCard.ability == "minusOnePhase") {
				if (phaseCalls > 1) {
					phaseCalls -= 2;
					currentPhase();
				} else {
					return null;
				}
			}
			else {
				return null;
			}
	} else {
		return null;
	}
	return selectedCard;
}

//My Discard
var myDiscard = [];

function exchangeCard () {
    var myHandIndex = document.getElementById('selCard');
	var selectedCard = myHand[logCard][0];
		myDiscard.push(myHand.splice(logCard,1));
		drawPoints--;
		drawTotal();
		moveToHand();
}

//Discard All Cards
function discardAllCards () {
	for (var i = 0; i < myHand.length; i++) {
		myDiscard.push(myHand[i].splice(0,1));
	}
	myHand = [];
	return myDiscard;	
}

//My Trash
var trashPile = [];

function trashCard () {
	var selectedCard = myHand[logCard][0];
	if(selectedCard) {
		trashPile.push(myHand.splice(logCard, 1));
		updateSelectCardDropdown(myHand);
	} else {
		return null;
	}
}

function doubleACard () {
	var selectedCard = myHand[logCard][0];
	totalPoints += selectedCard.fightingValue;
	document.getElementById('totalDamagePoints').innerHTML = totalPoints;
}

function copyACard () {
	var selectedCard = myHand[logCard][0];
	tapCard();
}

function backToDeck() {
	if(winRound = true) {
		var myHandIndex = document.getElementById('selCard');
		var selectedCard = myHand[logCard][0];
			myHand.splice(logCard, 1);
			updateSelectCardDropdown(myHand);
			myDeck.push.appendChild(selectedCard.splice(0,1));
	}
}

var sortThreeCards = [];

function sortThree () {
	if (myDeck.length > 0) {
		for(var i = 0; i < 3; i++) {
			sortThreeCards.push(myDeck.splice(0,1));
		}
	}
	else {
		return null;
	}
	//return myHand;
	updateSortedCards();
}

function updateSortedCards() {
    var mySortIndex = document.getElementById('sortThreeCards');
	mySortIndex.innerHTML = '';
	
	for(var i = 0; i < sortThreeCards.length; i++){
		var card = sortThreeCards[i];
		console.log(card[0].title);
		if(card[0].title == "Idiot") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/idiot-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Starving") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/starving-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Harvesting") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/harvesting-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Endurance") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/endurance-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "Brilliance") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/brilliance-card.png" class="cardselected"></a>';
		}
		else if(card[0].title == "ExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-weapon.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-recycle.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-repeat.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "ExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/exploration-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-contact.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-optimization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "SandstormFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-prioritization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-optimization.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-contact.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "DeepExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-tools.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-exchange.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-nourishment.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-recycle.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-repeat.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-minusphase.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CleanSolarSeven") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-discovery.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "CargoHaul") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/cargo-haul-weapon.png" class="cardselected rotation"></img></a>';
		}
		else if(card[0].title == "Moronic") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/moronic-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Suicidal") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/suicidal-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Hungry") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-hungry-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Stupid") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/stupid-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Hungry") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/hungry-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Distracted") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/distracted-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Scared") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/scared-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Stupid") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-stupid-card.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Really Tired") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardClicked('+i+')" target="_blank"><img src = "cardimg/really-tired-card.png" class="cardselected"></img></a>';
		}
		
	document.getElementById('sortThreeCards').innerHTML += cardButton;
	}
	document.getElementById('discardCard').style.display = "block";
	document.getElementById('placeOnDeck').style.display = "block";
	document.getElementById('completeSort').style.display = "block";
}

function discard () {
	var mySortIndex = document.getElementById('sortThreeCards');
	var selectedCard = sortThreeCards[logCard][0];
		sortThreeCards.splice(mySortIndex, 1);
		myDiscard.push(selectedCard);
		sortThreeCards[logCard] = '';
		updateSortedCards();
}

var deckHolder = [];

function placeOnDeck () {
    var mySortIndex = document.getElementById('sortThreeCards');
	var selectedCard = sortThreeCards[logCard][0];
		sortThreeCards.splice(mySortIndex, 1);
		deckHolder.push(selectedCard);
		sortThreeCards[logCard] = '';
		updateSortedCards();
}

function completeSort () {
	deckHolder.push(myDeck);
	myDeck = [];
		for(var i = 0; i < deckHolder[2].length; i++) {
			deckHolder.push(deckHolder[2][i]);
		}
		deckHolder[2] = '';
	myDeck.push(deckHolder);
	deckHolder = [];
	
}

//Create Endangerement/Dexterity Deck (Weapon should be replaced and Martian Attack)
function startingEDdeck() {
	var edCards = [
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Weapon', fightingValue: 2, ability: null, destroyPoints: 1, numCards: 3, title: 'ExplorationOne'},
		{endangerementTitle: 'Sandstorm', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Discovery', fightingValue: 3, ability: "destroyCard", destroyPoints: 1, numCards: 1, title: 'SandstormOne'},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Discovery', fightingValue: 1, ability: "destroyCard", destroyPoints: 1, numCards: 1,  title: 'ExplorationTwo'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Multiply', fightingValue: 2, ability: "doubleCard", destroyPoints: 1, numCards: 1, title: 'DeepExplorationOne'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Tools', fightingValue: 0, ability: "addTwoCard", destroyPoints: 1, numCards: 2, title: 'CleanSolarOne'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Optimization', fightingValue: 2, ability: "addOneCard", destroyPoints: 1, numCards: 1, title: 'DeepExplorationTwo'},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Multiply', fightingValue: 1, ability: "doubleCard", destroyPoints: 1, numCards: 1,  title: 'ExplorationThree'},
		{endangerementTitle: 'Sandstorm', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Contact', fightingValue: 3, ability: "sortThreeCards", destroyPoints: 1, numCards: 1, title: 'SandstormTwo'},
		{endangerementTitle: 'Sandstorm', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Optimization', fightingValue: 3, ability: "addOneCard", destroyPoints: 1, numCards: 1, title: 'SandstormThree'},
		{endangerementTitle: 'Cargo Haul', phaseOneValue: 5, phaseTwoValue: 9, phaseThreeValue: 14, drawAmount: 5, dexterityTitle: 'Weapon', fightingValue: 4, ability: null, destroyPoints: 1, numCards: 2, title: 'CargoHaul'},
		{endangerementTitle: 'Sandstorm', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Prioritization', fightingValue: 3, ability: "exchangeOneCard", destroyPoints: 1, numCards: 1, title: 'SandstormFour'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Prioritization', fightingValue: 0, ability: "exchangeTwoCard", destroyPoints: 1, numCards: 2, title: 'CleanSolarTwo'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Contact', fightingValue: 2, ability: "sortThreeCards", destroyPoints: 1, numCards: 1, title: 'DeepExplorationThree'},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Recycle', fightingValue: 1, ability: "belowPile", destroyPoints: 1, numCards: 1,  title: 'ExplorationFour'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Nourishment', fightingValue: 0, ability: "addOneLife", destroyPoints: 1, numCards: 2, title: 'CleanSolarThree'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Recycle', fightingValue: 0, ability: "belowPile", destroyPoints: 1, numCards: 1, title: 'CleanSolarFour'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Discovery', fightingValue: 2, ability: "destroyCard", destroyPoints: 1, numCards: 1, title: 'DeepExplorationFour'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Repeat', fightingValue: 0, ability: "copyCard", destroyPoints: 1, numCards: 1, title: 'CleanSolarFive'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Knowledge', fightingValue: 0, ability: "minusOnePhase", destroyPoints: 1, numCards: 1, title: 'CleanSolarSix'},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Repeat', fightingValue: 1, ability: "copyCard", destroyPoints: 1, numCards: 1,  title: 'ExplorationFive'},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Nourishment', fightingValue: 1, ability: "addOneLife", destroyPoints: 1, numCards: 2,  title: 'ExplorationSix'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Nourishment', fightingValue: 2, ability: "addOneLife", destroyPoints: 1, numCards: 1, title: 'DeepExplorationFive'},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Prioritization', fightingValue: 2, ability: "doubleCard", destroyPoints: 1, numCards: 1, title: 'DeepExplorationSix'},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Discovery', fightingValue: 0, ability: "destroyCard", destroyPoints: 1, numCards: 1, title: 'CleanSolarSeven'},
	]
	
	var deck = [];
	for(var i = 0; i < edCards.length; i++) {
		var edCard = edCards[i];
		for(var x = 0; x < edCard.numCards; x++) {
			deck.push(edCard);
		}
	}
	
	return deck;
}

var edDeck = new startingEDdeck();

//Shuffle And Deal Endangerement/Dexterity Deck
var edDeckShuffleNum = 0;
function edDeckShuffle(n) {
	if (phaseCalls === 4) {
		currentPhase ();
		return null;
	} else if (myDiscard.length > 0) {
		reshuffleED();
		for(var i = 0; i < n; i++)
			for(var j = 0; j < edDeck.length; j++) {
				var k = Math.floor(Math.random() * edDeck.length);
				var temp = edDeck[j];
				edDeck[j] = edDeck[k];
				edDeck[k] = temp;
			}
		currentPhase ();
		shuffleEDCall();
		document.getElementById('emptyED').innerHTML = '<img src = "cardimg/danger-card-back.jpg" />';
	} else if (edDeck.length === 0 || edDeckShuffleNum === 0) {
		edDeckShuffleNum++;
		for(var i = 0; i < n; i++)
			for(var j = 0; j < edDeck.length; j++) {
				var k = Math.floor(Math.random() * edDeck.length);
				var temp = edDeck[j];
				edDeck[j] = edDeck[k];
				edDeck[k] = temp;
			}
		currentPhase ();
		shuffleEDCall();
		document.getElementById('emptyED').innerHTML = '<img src = "cardimg/danger-card-back.jpg" />';
		} else {
		return null;
	}
}

var selectionDeck = [];

function updateEDCard(edDeckCards){
	var edCardDropdown = document.getElementById('edselCard');
	edCardDropdown.innerHTML = '';
	
	for(var i = 0; i < edDeckCards.length; i++){
		var card = edDeckCards[i];
		var edcardString = JSON.stringify(card);
		if(card[0].title == "ExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-weapon.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "ExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-discovery.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "ExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-multiply.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "ExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-recycle.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "ExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-repeat.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "ExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-nourishment.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "SandstormOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-discovery.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "SandstormTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-contact.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "SandstormThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-optimization.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "SandstormFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/sandstorm-prioritization.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-optimization.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-contact.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-discovery.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-nourishment.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "DeepExplorationSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/deep-exploration-multiply.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarOne") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-tools.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarTwo") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-exchange.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarThree") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-nourishment.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarFour") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-recycle.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarFive") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-repeat.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarSix") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-minusphase.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "CleanSolarSeven") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/clean-solar-discovery.png" class="cardselected"></img></a>';
		} 
		else if(card[0].title == "CargoHaul") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/cargo-haul-weapon.png" class="cardselected"></img></a>';
		}
		edCardDropdown.innerHTML += cardButton;
	}
}

function moveEDHand () {
	if (phaseCalls === 4) {
		for(var i = 0; i < 2; i++) {
			selectionDeck.push(finalDeck.splice(0,1));
			updateFinalCard(selectionDeck);
		}
		document.getElementById('shuffleED').innerHTML = "";
	} else if (edDeck.length > 0) {
		for(var i = 0; i < 2; i++) {
			selectionDeck.push(edDeck.splice(0,1));
			updateEDCard(selectionDeck);
		}
		document.getElementById('shuffleED').innerHTML = "";
	}
	else {
		document.getElementById('emptyED').innerHTML = '<img src = "cardimg/empty-cards.jpg" />';
	}
	//return myHand;
	//document.getElementById('selectionDeck').innerHTML = JSON.stringify(selectionDeck);
}

function edDeckCardCount() {
  return edDeck.length;
}

//These Are Different Endangerement/Dexterity Stacks
//Endangerement/Dexterity In Play
var inPlay = [];

var logEDCard = [];

function cardEDClicked (cardEDIndex) {
	console.log(cardEDIndex);
	logEDCard = [];
	logEDCard.push.apply(logEDCard, arguments);
}

var tempPlay = [];

function moveToPlay () {
		var selectIndex = document.getElementById('edselCard');
		var selectedEDCard = selectionDeck[logEDCard][0];
		if(selectedEDCard) {
			inPlay.splice(selectIndex, 1);
			if (phaseCalls === 4) {
				finalDeck=[];
				updateEDCard(inPlay);
			}
			else {
				updateEDCard(inPlay);
			}
			inPlay = [];
			inPlay.push(selectionDeck.splice(logEDCard,1));
			tempPlay.push(inPlay[0].splice(0,1));
			inPlay = [];
			inPlay.push(tempPlay[0][0].splice(0,1));
			tempPlay = [];
			console.log(inPlay[0][0].title);

		if(inPlay[0][0].title == "ExplorationOne") {
			var cardButton = '<img src = "cardimg/exploration-weapon.png"></img>';
		}
		else if(inPlay[0][0].title == "ExplorationTwo") {
			var cardButton = '<img src = "cardimg/exploration-discovery.png"></img>';
		}
		else if(inPlay[0][0].title == "ExplorationThree") {
			var cardButton = '<img src = "cardimg/exploration-multiply.png"></img>';
		}
		else if(inPlay[0][0].title == "ExplorationFour") {
			var cardButton = '<img src = "cardimg/exploration-recycle.png"></img>';
		}
		else if(inPlay[0][0].title == "ExplorationFive") {
			var cardButton = '<img src = "cardimg/exploration-repeat.png"></img>';
		}
		else if(inPlay[0][0].title == "ExplorationSix") {
			var cardButton = '<img src = "cardimg/exploration-nourishment.png"></img>';
		}
		else if(inPlay[0][0].title == "SandstormOne") {
			var cardButton = '<img src = "cardimg/sandstorm-discovery.png"></img>';
		}
		else if(inPlay[0][0].title == "SandstormTwo") {
			var cardButton = '<img src = "cardimg/sandstorm-contact.png"></img>';
		}
		else if(inPlay[0][0].title == "SandstormThree") {
			var cardButton = '<img src = "cardimg/sandstorm-optimization.png"></img>';
		}
		else if(inPlay[0][0].title == "SandstormFour") {
			var cardButton = '<img src = "cardimg/sandstorm-prioritization.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationOne") {
			var cardButton = '<img src = "cardimg/deep-exploration-multiply.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationTwo") {
			var cardButton = '<img src = "cardimg/deep-exploration-optimization.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationThree") {
			var cardButton = '<img src = "cardimg/deep-exploration-contact.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationFour") {
			var cardButton = '<img src = "cardimg/deep-exploration-discovery.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationFive") {
			var cardButton = '<img src = "cardimg/deep-exploration-nourishment.png"></img>';
		}
		else if(inPlay[0][0].title == "DeepExplorationSix") {
			var cardButton = '<img src = "cardimg/deep-exploration-multiply.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarOne") {
			var cardButton = '<img src = "cardimg/clean-solar-tools.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarTwo") {
			var cardButton = '<img src = "cardimg/clean-solar-exchange.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarThree") {
			var cardButton = '<img src = "cardimg/clean-solar-nourishment.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarFour") {
			var cardButton = '<img src = "cardimg/clean-solar-recycle.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarFive") {
			var cardButton = '<img src = "cardimg/clean-solar-repeat.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarSix") {
			var cardButton = '<img src = "cardimg/clean-solar-minusphase.png"></img>';
		}
		else if(inPlay[0][0].title == "CleanSolarSeven") {
			var cardButton = '<img src = "cardimg/clean-solar-discovery.png"></img>';
		}
		else if(inPlay[0][0].title == "CargoHaul") {
			var cardButton = '<img src = "cardimg/cargo-haul-weapon.png"></img>';
		}
		else if(inPlay[0][0].title == "Treck") {
			var cardButton = '<img src = "cardimg/treck-to-rocket.png"></img>';
		}
		else if(inPlay[0][0].title == "Launch") {
			var cardButton = '<img src = "cardimg/prepare-launch.png"></img>';
		}
		else if(inPlay[0][0].title == "Tether") {
			var cardButton = '<img src = "cardimg/tether.png"></img>';
		}
		else if(inPlay[0][0].title == "IronMan") {
			var cardButton = '<img src = "cardimg/iron-man.png"></img>';
		}
		else {
			return null;
		}
		document.getElementById('inPlay').innerHTML += cardButton;
		if (phaseCalls === 4) {
			edCardStrength ();
		}
		else {
		edDiscard.push(selectionDeck.splice(0,1));
		edCardStrength ();
		}
}
}

//Endangerement/Dexterity Discard
var edDiscard = [];

function discardEDCard () {
	if (inPlay.length > 0) {
		edDiscard.push(inPlay.splice(0,1));
		var selectedEDCard = document.getElementById('edselCard');
		selectedEDCard.innerHTML = '';
		document.getElementById('inPlay').innerHTML = '';
	}
	else {
		return null;
	}
	return edDiscard;	
}

//Endangerement/Dexterity Discard Into My Discard
function discardMyED () {
	if (winRound) {
		myDiscard.push(inPlay[0].splice(0,1));
		var selectedEDCard = document.getElementById('edselCard');
		selectedEDCard.innerHTML = '';
		document.getElementById('inPlay').innerHTML = '';
	}
	else {
		return null;
	}
	return myDiscard;	
}

//Play Against Hazard Card

var totalPoints = 0;
function totalDamagePoints () {
	totalPoints=0;
	for (var i = 0; i < myHand.length; i++) {
		var inMyHand = myHand[i];
		var myHandIs = inMyHand[0].fightingValue;
		totalPoints += myHandIs;
	}
	document.getElementById('totalDamagePoints').innerHTML = totalPoints;
	return totalPoints;
}

//Check Strength Of Endangerement/Dexterity Card
var edCardValue = 0;

function edCardStrength () {	
	if(inPlay.length > 0) {
		if (phaseCalls === 2) {
			var cardStrength = inPlay[0][0].phaseOneValue;
			edCardValue += cardStrength;
		} else if (phaseCalls === 3) {
			var cardStrength = inPlay[0][0].phaseTwoValue;
			edCardValue += cardStrength;
		} else if (phaseCalls === 4) {
			var cardStrength = inPlay[0][0].phaseThreeValue;
			edCardValue += cardStrength;
		}
	}
	else {
		return null;
	}
}

//Discard All Cards
function winRound() {
	if(totalPoints >= edCardValue && giveLife.called) {
		discardAllCards();
		var selCardDropdown = document.getElementById('selCard');
		selCardDropdown.innerHTML = '';
		totalPoints = 0;
		totalDamagePoints();
		discardEDCard();
		drawPoints = 0;
		edCardValue = 0;
		document.getElementById("myHand").disabled = false;
		giveLife.called = false;
	} else if(totalPoints >= edCardValue && gainCard.called) {
		discardAllCards();
		var selCardDropdown = document.getElementById('selCard');
		selCardDropdown.innerHTML = '';
		totalPoints = 0;
		totalDamagePoints();
		drawPoints = 0;
		discardEDCard();
		edCardValue = 0;
		document.getElementById("myHand").disabled = false;
		gainCard.called = false;
	} else if(totalPoints >= edCardValue) {
		discardAllCards();
		var selCardDropdown = document.getElementById('selCard');
		selCardDropdown.innerHTML = '';
		discardMyED();
		totalPoints = 0;
		totalDamagePoints();
		drawPoints = 0;
		edCardValue = 0;
		document.getElementById("myHand").disabled = false;
	} else {
		return null
	}
}

//Using Life Points To Win
function giveLife() {
	if (mylifePoints > 0 && inPlay.length > 0) {
		mylifePoints--;
		lifePointsBank++;
		totalPoints++;
		document.getElementById('totalDamagePoints').innerHTML = totalPoints;
		giveLife.called = true;
	}
	else {
		return null;
	}
}


//Using Life Points To Get New Card
function gainCard() {
	if (mylifePoints > 0 && inPlay.length > 0) {
		mylifePoints--;
		lifePointsBank++;
		myHand.push(myDeck.splice(0,1));
		updateSelectCardDropdown(myHand);
		totalDamagePoints();
		ageEnable();
		drawTotal();
		gainCard.called = true;
	}
	else {
		return null;
	}
}

//Trash Card For Life
function trashCardLife() {
	var myHandIndex = document.getElementById('selCard');
	var selectedCard = myHand[logCard][0];
	if (mylifePoints > 1 && selectedCard) {
		trashCard ()
		mylifePoints -= 2;
		lifePointsBank += 2;
		totalDamagePoints ();
	}
	else if (mylifePoints > 0 && selectedCard) {
		trashCard ()
		mylifePoints--;
		lifePointsBank++;
		totalDamagePoints ();
	}
	else {
		return null;
	}
}

//Reshuffle Deck

var pushedDeck = [];
function reshuffle() {
	for(var i = 0; i < myDiscard.length; i++) {
		myDeck.push(myDiscard[i][0]);
	}
	myDiscard = [];
}

function reshuffleED() {
	for(var i = 0; i < edDiscard.length; i++) {
		edDeck.push(edDiscard[i][0][0]);
	}
	edDiscard = [];
}

//Create Phase Cards AND Starting Phase Card
var phaseCalls = 1;
function currentPhase () {
	var phaseType = document.getElementById('phase');
	if(phaseCalls === 1) {
		phaseType.innerHTML = '';
		var phaseCard = '<p class = "squareone"></p>';
		phaseCalls++;
	} else if(phaseCalls === 2) {
		phaseType.innerHTML = '';
		var phaseCard = '<p class = "squaretwo"></p>';
		phaseCalls++;
	} else if(phaseCalls === 3) {
		phaseType.innerHTML = '';
		var phaseCard = '<p class = "squarethree"></p>';
		phaseCalls++;
	} else if(phaseCalls === 4) {
		phaseType.innerHTML = '';
		var phaseCard = '<p class = "squarefour"></p>';
		phaseCalls++;
	} else if(phaseCalls === 5) {
		phaseType.innerHTML = '';
		var phaseCard = '<p class = "squarefour"></p>';
		phaseCalls++;
	} else {
			return null;
	}
	phaseType.innerHTML += phaseCard;
}

function startingAgeCards() {
	var ageCards = [		
		{title: 'Moronic', type: 'Aging', fightingValue: -4, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Suicidal', type: 'Aging', fightingValue: -5, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Really Hungry', type: 'Aging', fightingValue: 0, ability: 'minusTwoLife', destroyPoints: 1, numCards: 1},
		{title: 'Stupid', type: 'Aging', fightingValue: -2, ability: 'null', destroyPoints: 1, numCards: 2},
		{title: 'Hungry', type: 'Aging', fightingValue: 0, ability: 'minusOneLife', destroyPoints: 1, numCards: 1},
		{title: 'Distracted', type: 'Aging', fightingValue: -1, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Scared', type: 'Aging', fightingValue: 0, ability: 'highestCard', destroyPoints: 1, numCards: 2},
		{title: 'Really Stupid', type: 'Aging', fightingValue: -3, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Really Tired', type: 'Aging', fightingValue: 0, ability: 'stop', destroyPoints: 1, numCards: 1},
		]
	
	var deck = [];
	for(var i = 0; i < ageCards.length; i++) {
		var ageCard = ageCards[i];
		for(var x = 0; x < ageCard.numCards; x++) {
			deck.push(ageCard);
		}
	}
	
	return deck;
}

var ageDeck = new startingAgeCards ();

//Shuffle And Deal Endangerement/Dexterity Deck
function ageDeckShuffle(n) {
	for(var i = 0; i < n; i++) 
		for(var j = 0; j < ageDeck.length; j++) {
			var k = Math.floor(Math.random() * ageDeck.length);
			var temp = ageDeck[j];
			ageDeck[j] = ageDeck[k];
			ageDeck[k] = temp;
		}
	shuffleAgeCall();
}

var selectionAgeDeck = [];

function updateAgeCard(ageDeckCards){
	
	var ageCardDropdown = document.getElementById('ageselCard');
	ageCardDropdown.innerHTML = '';
	
	for(var i = 0; i < ageDeckCards.length; i++){
		var card = ageDeckCards[i];
		var agecardString = JSON.stringify(card);
		if(card[0].title == "Moronic") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/exploration-weapon.png" class="cardselected"></img></a>';
		}
	}
}
		
function moveToDeck () {
	if (ageDeck.length > 0) {
		pushedDeck.push(ageDeck.splice(0,1));
		for(var i = 0; i < pushedDeck.length; i++) {
			myDeck.push(pushedDeck[i][0]);
		}
		pushedDeck = [];
		document.getElementById('shuffleAge').innerHTML = "";
		document.getElementById('addCard').innerHTML = "Added!";
	}
	else {
		return null;
	}
}

function finalChapter () {
	var finalCards = [		
		{title: 'Treck', type: 'Final', fightingValue: 20, drawAmount: 6, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Launch', type: 'Final', fightingValue: 25, drawAmount: 7, ability: 'null', destroyPoints: 1, numCards: 1},
		{title: 'Tether', type: 'Final', fightingValue: 35, drawAmount: 9, ability: 'minusTwoLife', destroyPoints: 1, numCards: 1},
		{title: 'IronMan', type: 'Final', fightingValue: 40, drawAmount: 10, ability: 'null', destroyPoints: 1, numCards: 1},
	]

	var deck = [];
	for(var i = 0; i < finalCards.length; i++) {
		var finalCard = finalCards[i];
		for(var x = 0; x < finalCard.numCards; x++) {
			deck.push(finalCard);
		}
	}
	
	return deck;
}

var finalDeck = new finalChapter ();

//Shuffle And Deal Final Chapter Cards
function finalDeckShuffle(n) {
	for(var i = 0; i < n; i++)
		for(var j = 0; j < finalDeck.length; j++) {
			var k = Math.floor(Math.random() * finalDeck.length);
			var temp = finalDeck[j];
			finalDeck[j] = finalDeck[k];
			finalDeck[k] = temp;
		}

}

function updateFinalCard(finalDeckCards){
	var finalCardDropdown = document.getElementById('edselCard');
	finalCardDropdown.innerHTML = '';
	
	for(var i = 0; i < finalDeckCards.length; i++){
		var card = finalDeckCards[i];
		var finalcardString = JSON.stringify(card);
		if(card[0].title == "Treck") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/treck-to-rocket.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Launch") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/prepare-launch.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "Tether") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/tether.png" class="cardselected"></img></a>';
		}
		else if(card[0].title == "IronMan") {
			var cardButton = '<a href="javascript:void(0)" onclick="cardEDClicked('+i+')" target="_blank"><img src = "cardimg/iron-man.png" class="cardselected"></img></a>';
		}
		finalCardDropdown.innerHTML += cardButton;
	}
}
