import deck from './deck.js';
console.log('------------------------', 'Init Deck ------------------------')
console.log(deck);
import shuffle from './shuffle.js';
import dealFiveCardDraw from './deal.js';
import * as ui from './ui.js';
// TODO: Move function to individual file and import as default
// Window Level Access
Object.entries(ui).forEach(([ui,exported]) => window[ui]=exported);
import bet from './bet.js';

// ===========================================================================================================

// Players in the game
let players = 2;
console.log('------------------------', 'players = ', players,'------------------------')
// Current player
let currentPlayer = 0;
// Init (Purpose: array of player hand sub arrays)
let playerHands = []
// Set init value for playerHands
for (let i = 0; i < players; i++) {
	playerHands.push([]);
}
// Init (Purpose: array of player bank sub arrays)
let playerBanks = [];
for (let i = 0; i < players; i++) {
	playerBanks.push([500]);
}
// Init (Purpose: contain bet amount)
let amount = 0;
// Init (Purpose: differentiate between play button values)
let playBtnValue = false;
// Init (Purpose: sum of all ante(s) and bets)
let pot = 0;
// Init (Purpose: default value of ante(s))
let ante = 50;
// Init (Purpose: Only trigger ante on first deal)
let anteUp = true;
// ===========================================================================================================

console.log('------------------------', 'Init UI ------------------------')
// Create the UI
setUi(players, ante)

console.log('------------------------', 'Shuffle Deck ------------------------')
// Shuffle the deck
shuffle(deck);
console.log(deck);

// ===========================================================================================================

// This calls
const play = () => {
    if (!playBtnValue) {
        // Deal

        // Update UI
        playBtn(playBtnValue);
        playBtnValue = true;
        // Ante
        if (anteUp) {
            // Subtract ante from player bank
            playerBanks[currentPlayer] = playerBanks[currentPlayer] - ante;
            // Add the ante to the pot
            pot = pot + ante;
            updatePot(ante);
            // Set anteUp for subsequent deals
            anteUp = false;
        }
        // Call deal function
        dealFiveCardDraw(deck, 5, playerHands, players, currentPlayer);
        // Reset currentPlayer
        currentPlayer = 0;
        updateHands(players, playerHands);
        // TODO: call the discard create btn function
    } else {
        // Bet

        // Update UI
        playBtn(playBtnValue);
        playBtnValue = false;
        // Call bet function
        bet(amount);
    }
}
        // TODO: create the discard function

// Global Scope
window.play = play;

// ===========================================================================================================

//Validate hand winner

