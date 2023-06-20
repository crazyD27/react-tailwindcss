const Keyword = ({ usedLetters, currentWord }) => {
  const renderKeyword = () => {
    return currentWord.split('').map((letter, index) => {
      return (
        <div key={index} className="w-12 h-12 md:text-2xl grid place-items-center bg-white">
          {usedLetters.includes(letter) ? letter : ''}
        </div>
      );
    });
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 p-3 border-yellow-400 border-8">
        {renderKeyword()}
      </div>
    </>
  );
};

export default Keyword;