import React from 'react';

const Centralize = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        {children}
      </div>
    </>
  );
};

export default Centralize;