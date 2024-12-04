import React from 'react';

function GuessResults({ guesses }) {
  return (
    <ul className="guess-results">
      {guesses.map((guess, index) => (
        <li className="guess" key={guess + index}>
          {guess}
        </li>
      ))}
    </ul>
  );
}

export default GuessResults;
