import React from 'react';

const Input = ({ value }) => {
  return (
    <>
      <input
        type="text"
        value={value}
        className="w-14 h-14 text-base md:text-2xl text-center disabled:bg-white"
        disabled={true}
      />
    </>
  );
};

export default Input;