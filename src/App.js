import React, { useState } from 'react';

// Define card types
const CAT = '😼';
const DEFUSE = '🙅‍♂️';
const SHUFFLE = '🔀';
const EXPLODING_KITTEN = '💣';

const App = () => {
  const [deck, setDeck] = useState([]);
  const [message, setMessage] = useState('');

  // Function to create a deck of cards
  const createDeck = () => {
    const newDeck = Array.from({ length: 5 }, () => {
      const rand = Math.random();
      if (rand < 0.6) return CAT;
      if (rand < 0.8) return DEFUSE;
      if (rand < 0.9) return SHUFFLE;
      return EXPLODING_KITTEN;
    });
    shuffle(newDeck);
    setDeck(newDeck);
  };

  // Function to shuffle an array
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // Function to draw a card from the deck
  const drawCard = () => {
    if (deck.length === 0) {
      setMessage('No cards left in the deck!');
      return;
    }
    const card = deck.pop();
    setDeck([...deck]); // Update deck after drawing a card

    if (card === EXPLODING_KITTEN) {
      setMessage('Game Over! You drew an exploding kitten!');
      return;
    }
    if (card === DEFUSE) {
      setMessage('You defused the bomb!');
    }
    if (card === SHUFFLE) {
      setMessage('Shuffling the deck...');
      createDeck();
    }
    if (deck.length === 0) {
      setMessage("Congratulations! You've drawn all the cards from the deck!");
    }
  };

  return (
    <div>
      <h1>Exploding Kittens Game</h1>
      <button onClick={createDeck}>Start Game</button>
      <button onClick={drawCard}>Draw Card</button>
      {message && <p>{message}</p>}
      <div>
        <h2>Deck:</h2>
        <ul>
          {deck.map((card, index) => (
            <li key={index}>{card}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
