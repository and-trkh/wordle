import React, { useState, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';

function GuessInput({ handleSubmitGuess }) {
  const [input, setInput] = useState('');
  const state = useContext(GameContext);

  function handleInput(e) {
    setInput(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(input);
    setInput('');
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        autoFocus
        required
        value={input}
        onChange={handleInput}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        disabled={state.isWin !== null}
      />
    </form>
  );
}

export default GuessInput;
