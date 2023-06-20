import React from 'react';

import Title from './Title';
import Paragraph from './Paragraph';
import Feedback from './Feedback';
import Score from './Score';
import Tip from './Tip';
import Attempts from './Attempts';
import Keyword from './Keyword';
import GuessForm from './GuessForm';
import UsedLetters from './UsedLetters';

import values from '../data/values';

const Game = () => {
  const [keywordTip, setKeywordTip] = React.useState('');
  const [currentWord, setCurrentWord] = React.useState('');
  const [usedLetters, setUsedLetters] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState('');
  const inputRef = React.useRef();

  React.useEffect(() => {
    const index = Math.floor(Math.random() * Object.keys(values).length);
    const category = Object.keys(values)[index];
    const wordsList = values[category];
    const word = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();

    setKeywordTip(category);
    setCurrentWord(word);
  }, []);

  let errorMessageTimeout = null;

  const handleSubmit = (event) => {
    event.preventDefault();
    
    clearTimeout(errorMessageTimeout);

    const { current: input } = inputRef;
    const inputValue = input.value.toUpperCase();

    input.focus();
    input.value = '';

    if (usedLetters.includes(inputValue)) {
      setErrorMessage(`Letra "${inputValue}" já foi utilizada!`);

      errorMessageTimeout = setTimeout(() => {
        setErrorMessage('');
      }, 3000);

      return;
    }

    setUsedLetters([...usedLetters, inputValue]);
  };

  return (
    <>
      <Score score={10} />
      <Title>Adivinhe a palavra</Title>
      <Tip tip={keywordTip} />
      <Attempts attempts={4} />
      <Keyword usedLetters={usedLetters} currentWord={currentWord} />
      <Paragraph>Tente adivinhar uma letra da palavra:</Paragraph>
      <GuessForm handleSubmit={handleSubmit} inputRef={inputRef} errorMessage={errorMessage} />
      <Feedback />
      <UsedLetters currentWord={currentWord} usedLetters={usedLetters} />
    </>
  );
};

export default Game;