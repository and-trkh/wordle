import React, { useState } from 'react';

function GuessInput() {
  const [input, setInput] = useState({ guess: '' });

  function handleInput(e) {
    setInput({ guess: e.target.value.toUpperCase() });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setInput({ guess: '' });
    console.log(input);
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        autoFocus
        required
        value={input.guess}
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
