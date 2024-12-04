import React, { useState } from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <GuessResults
        guesses={[
          ...guesses,
          ...range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).fill('     '),
        ]}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
