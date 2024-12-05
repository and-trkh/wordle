import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

function Guess({ value }) {
  const state = useContext(GameContext);
  const guessArray = value.split('');

  return (
    <p className="guess">
      {guessArray.map((letter, index) => {
        let status = '';

        if (letter !== ' ') {
          if (letter === state.answer[index]) {
            status = 'correct';
          } else if (state.answer.includes(letter)) {
            status = 'misplaced';
          } else {
            status = 'incorrect';
          }
        }

        return (
          <span className={`cell ${status}`} key={index}>
            {letter}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
