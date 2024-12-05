import React, { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { sample } from '../../utils';
import { WORDS } from '../../data';

function RestartButton() {
  const state = useContext(GameContext);

  function handleRestart() {
    state.setIsWin(null);
    state.setAnswer(sample(WORDS));
    state.setGuesses([]);
  }

  return (
    <button className="restart-button" onClick={handleRestart}>
      Restart
    </button>
  );
}

export default RestartButton;
