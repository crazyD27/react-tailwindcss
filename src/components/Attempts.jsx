const Attempts = ({ attempts }) => {
  return (
    <>
      <p className="text-white text-sm">
        <span>Você tem {attempts} tentativa(s).</span>
      </p>
    </>
  );
};

export default Attempts;