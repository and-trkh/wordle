import React from 'react';
import Guess from '../Guess/Guess';

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess value={guess} key={guess + index} />
      ))}
    </div>
  );
}

export default GuessResults;
