import React from 'react';

const Win = ({ score }) => {
  return (
    <>
      <h1>Voce ganhou!</h1>
      <p>A sua pontuação foi {score}</p>
      <Link to="/new-game">
        <Button text="Reiniciar" />
      </Link>
    </>
  );
};

export default Win;