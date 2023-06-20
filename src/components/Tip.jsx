const Tip = ({ tip }) => {
  return (
    <>
      {' '}
      <p className="flex gap-2">
        <span>Dica sobre a palavra:</span>
        <strong className="text-yellow-400">{tip}</strong>
      </p>
    </>
  );
};

export default Tip;