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
function startDeck() {
	var mattCards = [
		{title: 'Idiot', fightingValue: -1, ability: "doubleCard", destroyPoints: 1, numCards: 5},
		{title: 'Starving', fightingValue: 0, ability: null, destroyPoints: 1, numCards: 7},
		{title: 'Harvesting', fightingValue: 0, ability: 'addOneLife', destroyPoints: 1, numCards: 1},
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
}

var myDeck = new startDeck();

var selectedCard = [];

//Shuffle And Deal Starting Deck
function stackShuffle(n) {
	for(var i = 0; i < n; i++) {
		for(var j = 0; j < myDeck.length; j++) {
			var k = Math.floor(Math.random() * myDeck.length);
			var temp = myDeck[j];
			myDeck[j] = myDeck[k];
			myDeck[k] = temp;
		}
	}
}

function stackCardCount() {
  return myDeck.length;
}

//These Are Different Stacks
//My Hand
var myHand = [];

/**
 * This function clears out everything in an option drop down menu.
 */
function clearOptionElements(optionDropdownId){
	var select = document.getElementById(optionDropdownId);
	var length = select.options.length;
	for(i = length - 1 ; i >= 0 ; i--) {
		select.remove(i);
	}
}

/**
* This function is used to update the values within the selCard option dropdown with a given deck of cards.
 */
function updateSelectCardDropdown(deckOfCards){
	
	var selCardDropdown = document.getElementById('selCard');
	clearOptionElements('selCard');
	
	for(var i = 0; i < deckOfCards.length; i++){
		var opt = document.createElement('option');
		var card = deckOfCards[i];
		opt.innerHTML = JSON.stringify(card);
		opt.value = i;
		selCardDropdown.appendChild(opt);
	}
}

function moveToTable() {
    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
}

function moveToHand () {
	if (myDeck.length > 0) {
		myHand.push(myDeck.splice(0,1));
		updateSelectCardDropdown(myHand);
	}
	else {
		return null;
	}
	//return myHand;
	document.getElementById('myHand').innerHTML = JSON.stringify(myHand);
}

//Select A Card
var selectedValue;

function getSelectedCard(){
    selectedValue = document.getElementById("selCard").value;
	console.log("Change selected card to: " + selectedValue);
}

//Tap A Card

function tapCard () {
    var myHandIndex = document.getElementById("selCard").value;
	var selectedCard = myHand[myHandIndex];
	if(selectedCard) {
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
			if(selectedCard[0].ability == "addOneLife") {
				if(mylifePoints < 22) {
				mylifePoints++;
				lifePointsBank--;
				} else {
				return null;	 
				}
			} else if (selectedCard[0].ability == "addTwoLife") {
				if (mylifePoints < 21) {
				mylifePoints += 2;
				lifePointsBank -= 2;
				} else {
					return null
				}
			} else if (selectedCard[0].ability == "addOneCard") {
				moveToHand();
			} else if (selectedCard[0].ability == "addTwoCard") {
				moveToHand();
				moveToHand();
			} else if (selectedCard[0].ability == "trashOneCard") {
				document.getElementById('trash').style.display = "block";
			} else if (selectedCard[0].ability == "copyCard") {
				document.getElementById('copy').style.display = "block";
			} else if (selectedCard[0].ability == "exchangeOneCard") {
				document.getElementById('exchange').style.display = "block";
			} else if (selectedCard[0].ability == "exchangeTwoCard") {
				document.getElementById('exchange').style.display = "block";
			} else if (selectedCard[0].ability == "belowPile") {
				document.getElementById('belowThePile').style.display = "block";
			} else if (selectedCard[0].ability == "doubleCard") {
				document.getElementById('double').style.display = "block";
			}
		/*var minusOnePhase;
		var sortThreeCards;*/
		
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
	var myHandIndex = document.getElementById("selCard").value;
	var selectedCard = myHand[myHandIndex];
	if(selectedCard[0].ability="exchangeOneCard") {
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
		myDiscard.push(selectedCard.splice(0,1));
		document.getElementById('myDiscard').innerHTML = JSON.stringify(myDiscard);
		moveToHand();
	} else if(selectedCard[0].ability="exchangeTwoCard") {
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
		myDiscard.push(selectedCard.splice(0,1));
		document.getElementById('myDiscard').innerHTML = JSON.stringify(myDiscard);
		moveToHand();
	} else {
		return null;
	}
	return selectedCard;
}

//Discard All Cards
function discardAllCards () {
	for (var i = 0; i < myHand.length; i++) {
		myDiscard.push(myHand.splice(i,myHand.length));
		
	}
	return myDiscard;	
}

//My Trash
var trashPile = [];

function trashCard () {
	var myHandIndex = document.getElementById("selCard").value;
	var selectedCard = myHand[myHandIndex];
	if(selectedCard) {
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
		trashPile.push(selectedCard.splice(0,1));
	} else {
		return null;
	}
	return selectedCard;
}

function doubleACard () {
	var myHandIndex = document.getElementById("selCard").value;
	var selectedCard = myHand[myHandIndex];
	myHand.splice(myHandIndex, 1);
	updateSelectCardDropdown(myHand);
	totalDamagePoints += selectedCard[0].fightingValue;
	return selectedCard;
}

function backToDeck() {
	if(winRound = true) {
		var myHandIndex = document.getElementById("selCard").value;
		var selectedCard = myHand[myHandIndex];
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
		myDeck.push.appendChild(selectedCard.splice(0,1));
	}
}

//Create Endangerement/Dexterity Deck (Weapon should be replaced and Martian Attack)
function startingEDdeck() {
	var edCards = [
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Weapon', fightingValue: 2, ability: null, destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Wild Winds', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Discovery', fightingValue: 3, ability: "destroyCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Discovery', fightingValue: 1, ability: "destroyCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Multiply', fightingValue: 2, ability: "doubleCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Tools', fightingValue: 0, ability: "addTwoCard", destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Optimization', fightingValue: 2, ability: "addOneCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Multiply', fightingValue: 1, ability: "doubleCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Wild Winds', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Contact', fightingValue: 3, ability: "sortThreeCards", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Wild Winds', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Optimization', fightingValue: 3, ability: "addOneCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Martian Attack', phaseOneValue: 5, phaseTwoValue: 9, phaseThreeValue: 14, drawAmount: 5, dexterityTitle: 'Weapon', fightingValue: 4, ability: null, destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Wild Winds', phaseOneValue: 4, phaseTwoValue: 7, phaseThreeValue: 11, drawAmount: 4, dexterityTitle: 'Prioritization', fightingValue: 3, ability: "exchangeOneCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Prioritization', fightingValue: 0, ability: "exchangeTwoCard", destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Contact', fightingValue: 2, ability: "sortThreeCards", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Recycle', fightingValue: 1, ability: "belowPile", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Nourishment', fightingValue: 0, ability: "addOneLife", destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Recycle', fightingValue: 0, ability: "belowPile", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Discovery', fightingValue: 2, ability: "destroyCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Repeat', fightingValue: 0, ability: "copyCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Knowledge', fightingValue: 0, ability: "minusOnePhase", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Repeat', fightingValue: 1, ability: "copyCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Nourishment', fightingValue: 1, ability: "addOneLife", destroyPoints: 1, numCards: 2},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Nourishment', fightingValue: 2, ability: "addOneLife", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Deep Exploration', phaseOneValue: 2, phaseTwoValue: 5, phaseThreeValue: 8, drawAmount: 3, dexterityTitle: 'Prioritization', fightingValue: 2, ability: "doubleCard", destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Exploration', phaseOneValue: 1, phaseTwoValue: 3, phaseThreeValue: 6, drawAmount: 2, dexterityTitle: 'Weapon', fightingValue: 2, ability: null, destroyPoints: 1, numCards: 1},
		{endangerementTitle: 'Clean Solar', phaseOneValue: 0, phaseTwoValue: 1, phaseThreeValue: 3, drawAmount: 1, dexterityTitle: 'Discovery', fightingValue: 0, ability: "destroyCard", destroyPoints: 1, numCards: 1},
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
function edDeckShuffle(n) {
	for(var i = 0; i < n; i++)
		for(var j = 0; j < edDeck.length; j++) {
			var k = Math.floor(Math.random() * edDeck.length);
			var temp = edDeck[j];
			edDeck[j] = edDeck[k];
			edDeck[k] = temp;
		}
}

function edDeckDeal() {	
  if (edDeck.length > 1) {
		return edDeck.splice(0,2);
	}
	else if (edDeck.length = 1) {
		return edDeck.splice(0,1);
	}
	else {
		return null;
  }
}

var currentED = edDeckDeal();

function edDeckCardCount() {
  return edDeck.length;
}

//These Are Different Endangerement/Dexterity Stacks
//Endangerement/Dexterity In Play
var inPlay = [];

function moveToPlay () {
	if (currentED.length > 0) {
		/*var myHandIndex = document.getElementById("selCard").value;
		function tapCard () {
	var selectedCard = myHand[myHandIndex];
	if(selectedCard) {
		myHand.splice(myHandIndex, 1);
		updateSelectCardDropdown(myHand);
		inPlay.push(currentED.splice(0,1));*/
	}
	else {
		return null;
	}
	//return inPlay;
	document.getElementById('inPlay').innerHTML = JSON.stringify(inPlay);
}

//Endangerement/Dexterity Discard
var edDiscard = [];

function discardEDCard () {
	if (currentED.length > 0) {
		edDiscard.push(currentED.splice(0,1));
	}
	else {
		return null;
	}
	return edDiscard;	
}

//Endangerement/Dexterity Discard Into My Discard
function discardMyED () {
	if (winRound) {
		myDiscard.push(inPlay.splice(0,1));
	}
	else {
		return null;
	}
	return myDiscard;	
}

//Play Against Hazard Card

var totalDamagePoints = (function() {
	var totalPoints = 0
	for (var i = 0; i < myHand.length; i++) {
		var inMyHand = myHand[i];
		var myHandIs = inMyHand[0].fightingValue;
		totalPoints += myHandIs;
	}
	return totalPoints;
}) ();

//Phase Value To Change ONCE PHASE FUNCTION COMPLETED...
//Check Strength Of Endangerement/Dexterity Card
var edCardStrength = (function() {	
	if(inPlay.length > 0) {
		var cardStrength = inPlay[0][0].phaseOneValue;
		return cardStrength;
	}
	else {
		return null;
	}
}) ();

//Discard All Cards
function winRound() {
	if(totalDamagePoints >= edCardStrength && giveLife.called != true) {
		discardAllCards();
		discardMyED();
	}
	else if(totalDamagePoints >= edCardStrength && giveLife.called) {
		discardAllCards();
		discardEDCard();
	}
	else {
		return null
	}
}

//Using Life Points To Win
function giveLife() {
	if (mylifePoints > 0) {
		mylifePoints--;
		lifePointsBank++;
		totalDamagePoints++;
		giveLife.called = true;
	}
	else {
		return null;
	}
}


//Using Life Points To Get New Card
function gainCard() {
	if (mylifePoints > 0) {
		mylifePoints--;
		lifePointsBank++;
		moveToHand();
	}
	else {
		return null;
	}
}

//Reshuffle Deck
function reshuffle() {
	if(myDeck = 0) {
		Array.prototype.push.apply(myDeck, myDiscard);
	} else {
		return null;
	}
}

//Create Phase Cards AND Starting Phase Card
//NO Current Phase Card YET
/*var phase = phaseCards[0];
var currentPhase = (function () {
	var phaseCards = ["Green", "Yellow", "Red"];
	if(myDeck = 0) {
		if(reshuffle.numInstances = 1) {
			phase = phaseCards[1];
		} else if (reshuffle.numInstances = 2) {
			phase = phaseCards[2];
		} else {
			return null;
		}
	}
	return phase;
}*/