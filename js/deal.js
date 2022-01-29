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

	console.log('------------------------', 'Player hands after deal', '------------------------')

	console.log(playerHands);

	console.log('------------------------', 'Starting deal animation', '------------------------');

	let dealInterval = 0;

	// Interval needed to simulate dealing one card after another
	let dealAnimation = setInterval(async() => {
		console.log('------------------------', 'Deal interval ', dealInterval, '------------------------');

		// Toggle movement
		document.getElementById(`deck-card-${dealInterval}`).classList.toggle('animate');

		let parity = Boolean(dealInterval % 2);
	
		// Flip odd cards
		if (parity) {
			document.getElementById(`card-back-${dealInterval}`).classList.toggle('card-flip');
		}
		
		dealInterval++; 

		if (dealInterval === 10) {
			console.log('------------------------', 'Ending deal animation', '------------------------');
			// Catch last card and stop deal
			clearInterval(dealAnimation);
			return
		}

		// Show/hide even cards
		if (!parity) {
			// document.getElementById(`card-back-${dealInterval}`).classList.toggle('card-flip');
		}
	}, 200);
}

export default dealFiveCardDraw;