import Button from './Button';
import Paragraph from './Paragraph';

const PlayGame = () => {
  return (
    <>
      <Paragraph text="Tente adivinhar uma letra da palavra:" />
      <fieldset className="flex items-center justify-center gap-4">
        <input type="text" className="w-12 h-12 pl-4 text-2xl" required />
        <Button text="Jogar!" />
      </fieldset>
    </>
  );
};

export default PlayGame;
