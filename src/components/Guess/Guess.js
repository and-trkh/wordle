import React from 'react';

function Guess({ value }) {
  return (
    <p className="guess">
      {value.split('').map((char, index) => (
        <span className="cell" key={index}>
          {char}
        </span>
      ))}
    </p>
  );
}

export default Guess;
