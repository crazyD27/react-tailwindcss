const Feedback = () => {
  const Wrapper = ({ bg, text }) => {
    return (
      <>
        <div className="flex items-center gap-2">
          <div className={`${bg} w-4 h-4`}></div>
          <span className="uppercase font-semibold text-white text-sm">
            {text}
          </span>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="flex gap-4 mt-3">
        <Wrapper bg="bg-red-600" text="Errou" />
        <Wrapper bg="bg-green-600" text="Acertou" />
      </div>
    </>
  );
};

export default Feedback;