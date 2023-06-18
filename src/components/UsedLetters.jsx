import Paragraph from './Paragraph';

const UsedLetters = ({ letters }) => {
  return (
    <>
      <Paragraph text="Letras já utilizadas:" />
      {letters && letters.map((letter) => {
        return <span key={letter}>{letter}</span>;
      })}
    </>
  );
};

export default UsedLetters;