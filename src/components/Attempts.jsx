import Paragraph from './Paragraph';

const Attempts = ({ attempts }) => {
  return (
    <>
      <Paragraph>Você tem {attempts} tentativa(s).</Paragraph>
    </>
  );
};

export default Attempts;