const Paragraph = ({ children, customStyles }) => {
  return (
    <>
      <p className={`text-white ${customStyles}`}>{children}</p>
    </>
  );
};

export default Paragraph;