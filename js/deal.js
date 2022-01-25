const dealFiveCardDraw = (deck, cardsToDeal, playerHands, players, currentPlayer) => {
    console.log('------------------------', 'Deal', '------------------------')
    for (let i = 0; i < cardsToDeal; i++) { // Cards to deal = 2
		for (let j = 0; j < players; j++) { // Player
			// Deal 1 card to currentPlayer
			playerHands[currentPlayer].push(deck.shift());
			// Increment currentPlayer for next draw
			currentPlayer++;
		}
		// Reset currentPlayer for next draw
		currentPlayer = 0;
	}
	console.log('------------------------', 'Player hands after deal',  '------------------------')
	console.log(playerHands);
}

export default dealFiveCardDraw;