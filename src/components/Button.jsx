const Button = ({ text, handleClick }) => {
  return (
    <>
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold uppercase border-2 border-white rounded-3xl w-48 h-12"
      >
        {text}
      </button>
    </>
  );
};

export default Button;