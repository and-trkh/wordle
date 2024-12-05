import React, { useState, useContext, useEffect } from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample, range } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import { GameContext } from '../../contexts/GameContext';
import ResultBanner from '../ResultBanner/ResultBanner';
import RestartButton from '../RestartButton/RestartButton';

// Pick a random word on every pageload.

function Game() {
  const [answer, setAnswer] = useState(sample(WORDS));
  const [isWin, setIsWin] = useState(null);
  const [guesses, setGuesses] = useState([]);

  function checkWin(nextGuesses) {
    if (nextGuesses.includes(answer)) {
      setIsWin(true);
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setIsWin(false);
    }
  }

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    checkWin(nextGuesses);
    setGuesses(nextGuesses);
  }

  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });

  return (
    <GameContext.Provider
      value={{ answer, setAnswer, isWin, setIsWin, setGuesses }}
    >
      {isWin !== null && <RestartButton />}
      <GuessResults
        guesses={[
          ...guesses,
          ...range(0, NUM_OF_GUESSES_ALLOWED - guesses.length).fill('     '),
        ]}
      />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
      {isWin !== null && <ResultBanner attempts={guesses.length} />}
    </GameContext.Provider>
  );
}

export default Game;
