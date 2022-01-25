// Fisher–Yates (aka Knuth) Shuffle O(n) 
const shuffle = (deck) => {
	let m = deck.length, t, i;
  
	// While there remain elements to shuffle…
	while (m) {
  
	  // Pick a remaining element…
	  i = Math.floor(Math.random() * m--);
  
	  // And swap it with the current element.
	  t = deck[m];
	  deck[m] = deck[i];
	  deck[i] = t;
	}
  
	return deck;
}

export default shuffle;