import Button from './Button';

const GuessForm = ({ handleSubmit, inputRef, errorMessage }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-4">
        <input type="text" ref={inputRef} required maxLength={1} className="w-12 h-12 text-2xl text-center" />
        <Button text="Jogar!" />
        <p className="text-amber-200">{errorMessage}</p>
      </form>
    </>
  );
};

export default GuessForm;