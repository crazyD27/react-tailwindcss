import React from 'react';
import { Navigate } from 'react-router-dom';

import Button from './Button';

import values from '../data/values';

const GuessForm = ({
  currentWord,
  setCurrentWord,
  usedLetters,
  setUsedLetters,
  setKeywordTip,
  setScore
}) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [correctWord, setCorrectWord] = React.useState('');
  const [totalWins, setTotalWins] = React.useState(0);
  const inputRef = React.useRef();

  React.useEffect(() => {
    const index = Math.floor(Math.random() * Object.keys(values).length);
    const category = Object.keys(values)[index];
    const wordsList = values[category];
    const currentWord = wordsList[Math.floor(Math.random() * wordsList.length)].toUpperCase();

    setCurrentWord(currentWord);
    setKeywordTip(category);
  }, [totalWins]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputValue = inputRef.current.value.toUpperCase();

    inputRef.current.focus();
    inputRef.current.value = '';

    if (currentWord.includes(inputValue)) {
      setScore((prev) => prev + 10);
    }

    if (usedLetters.includes(inputValue)) {
      setErrorMessage(`Letra "${inputValue}" já foi utilizada!`);

      setTimeout(() => setErrorMessage(''), 3000);

      return;
    }

    setUsedLetters((prev) => {
      return [...prev, inputValue];
    });
  };

  return (
    <>
      {correctWord && correctWord === currentWord ? (
        <Navigate replace={true} to="/win" />
      ) : (
        <form onSubmit={handleSubmit} className="flex items-center justify-center gap-4">
          <input type="text" ref={inputRef} required maxLength={1} className="w-12 h-12 text-2xl text-center" />
          <Button text="Jogar!" />
          <p className="text-amber-200">{errorMessage}</p>
        </form>
      )}
    </>
  );
};

export default GuessForm;