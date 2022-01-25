// Current player
let currentPlayer = 0;

// Players in the game
let players = 2;
console.log('------------------------', 'players = ', players,'------------------------')


// Player hands
let playerHands = []

// Init Player hands
for (let i = 0; i < players; i++) {
	playerHands.push([]);
}

export {
    players,
    playerHands
}