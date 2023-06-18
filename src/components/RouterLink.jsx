import { Link } from 'react-router-dom';

const RouterLink = ({ path, children }) => {
  return (
    <>
      <Link to={path}>
        {children}
      </Link>
    </>
  );
};

export default RouterLink;