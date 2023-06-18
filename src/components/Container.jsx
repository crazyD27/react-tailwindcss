const Container = ({ children }) => {
  return (
    <>
      <div className="w-full h-screen bg-blue-950 grid place-items-center">
        {children}
      </div>
    </>
  );
};

export default Container;