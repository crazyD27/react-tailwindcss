import Paragraph from './Paragraph';

const Tip = ({ keywordTip }) => {
  return (
    <>
      <Paragraph customStyles="flex gap-2">
        <span>Dica sobre a palavra:</span>
        <strong className="text-yellow-400">{keywordTip}</strong>
      </Paragraph>
    </>
  );
};

export default Tip;