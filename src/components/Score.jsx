import React from 'react';

const Score = ({ score }) => {
  return (
    <>
      <p className="text-white">
        <span className="font-bold">Pontuação: </span>
        <span>{score}</span>
      </p>
    </>
  );
};

export default Score;
