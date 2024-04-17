import { useParams } from 'react-router-dom';

const Details = () => {
  const { id } = useParams();
  // NOTE: You have to use <BrowserRouter> element in App.jsx
  //      to be able to use (useParams) hook
  return (
    <h2>
      hi!
      <h3>{id}</h3>
    </h2>
  );
};

export default Details;
