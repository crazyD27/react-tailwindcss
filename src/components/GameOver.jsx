import Title from './Title';
import Button from './Button';
import Paragraph from './Paragraph';

const GameOver = ({ score }) => {
  return (
    <>
      <Title text="Fim de jogo!" />
      <Paragraph text={`A sua pontuação foi ${score}`} />
      <Button text="Reiniciar" />
    </>
  );
};

export default GameOver;
