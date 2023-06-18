import React from 'react';
import Score from './Score';
import Title from './Title';
import Tips from './Tips';
import Attempts from './Attempts';
import Form from './Form';
import UsedLetters from './UsedLetters';

const NewGame = () => {
  const [letter, setLetter] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Score score={10} />
      <Title text="Adivinhe a palavra" />
      <Tips />
      <Attempts attempts={2} />
      <Form handleSubmit={handleSubmit} />
      <UsedLetters />
    </>
  );
};

export default NewGame;
