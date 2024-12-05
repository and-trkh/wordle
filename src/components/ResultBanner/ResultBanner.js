import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

function ResultBanner({ attempts }) {
  const state = useContext(GameContext);

  return (
    <div className={`banner ${state.isWin ? 'happy' : 'sad'}`}>
      {state.isWin ? (
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {attempts} guesses</strong>.
        </p>
      ) : (
        <p>
          Sorry, the correct answer is <strong>{state.answer}</strong>.
        </p>
      )}
    </div>
  );
}

export default ResultBanner;
