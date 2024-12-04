import React, { useState } from 'react';

function GuessInput({ handleSubmitGuess }) {
  const [input, setInput] = useState('');

  function handleInput(e) {
    setInput(e.target.value.toUpperCase());
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSubmitGuess(input);
    setInput('');
    console.log({ guess: input });
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
      />
    </form>
  );
}

export default GuessInput;
