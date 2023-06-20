const Feedback = () => {
  return (
    <>
      <div className="flex gap-4 mt-3">
        <div className="flex items-center gap-2">
          <div className="bg-red-600 w-4 h-4"></div>
          <span className="uppercase font-semibold text-white text-sm">
            Errou
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-green-600 w-4 h-4"></div>
          <span className="uppercase font-semibold text-white text-sm">
            Acertou
          </span>
        </div>
      </div>
    </>
  );
};

export default Feedback;