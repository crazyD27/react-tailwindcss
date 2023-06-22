import Paragraph from './Paragraph';

const UsedLetters = ({ currentWord, usedLetters }) => {
  const renderUsedLetters = () => {
    return usedLetters.map((letter, index) => {
      const textColor = currentWord.includes(letter)
        ? 'text-green-600'
        : 'text-red-600';

      return (
        <span key={index} className={textColor}>
          {letter}
        </span>
      );
    });
  };

  return (
    <>
      <Paragraph customStyles="flex gap-2">
        <span>Letras já utilizadas:</span>
        {renderUsedLetters()}
      </Paragraph>
    </>
  );
};

export default UsedLetters;