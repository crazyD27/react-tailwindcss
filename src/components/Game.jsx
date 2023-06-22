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

const Game = ({ score, setScore }) => {
  const [currentWord, setCurrentWord] = React.useState('');
  const [usedLetters, setUsedLetters] = React.useState([]);
  const [keywordTip, setKeywordTip] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);

  return (
    <>
      <Score score={score} />
      <Title>Adivinhe a palavra</Title>
      <Tip keywordTip={keywordTip} />
      <Attempts attempts={attempts} />
      <Keyword usedLetters={usedLetters} currentWord={currentWord} />
      <Paragraph>Tente adivinhar uma letra da palavra:</Paragraph>
      <GuessForm
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        usedLetters={usedLetters}
        setUsedLetters={setUsedLetters}
        setKeywordTip={setKeywordTip}
        setScore={setScore}
      />
      <Feedback />
      <UsedLetters currentWord={currentWord} usedLetters={usedLetters} />
    </>
  );
};

export default Game;