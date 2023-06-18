import React from 'react';
import Input from './Input';
import PlayGame from './PlayGame';

const Form = ({ handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <fieldset className="flex flex-wrap justify-center gap-3 p-3 border-yellow-400 border-8">
          <Input value={'B'} />
          <Input value={'A'} />
          <Input value={'N'} />
          <Input value={'A'} />
          <Input value={'N'} />
          <Input value={'A'} />
        </fieldset>
        <PlayGame />
      </form>
    </>
  );
};

export default Form;