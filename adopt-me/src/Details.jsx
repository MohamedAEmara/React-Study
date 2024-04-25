import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';

const Details = () => {
  const { id } = useParams();
  // NOTE: You have to use <BrowserRouter> element in App.jsx
  //      to be able to use (useParams) hook
 
  const results = useQuery(["details", id], fetchPet);
  // Search for this id in your cash, if you don't find it run this >> fetchPet <<

 console.log(results.isError);
 if(results.isError) {
  return <h2>Oh, noooooooooooooo</h2>
 }
  // By default this loading symbol will run
  // and as soon as the fetch completed, the page will be rerendered and loading symbol will disapear.
  if(results.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>🌀</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];
  
  return (
    <div className='details'>
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.bread} - {pet.city}, {pet.state}
          <button>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  );
};

export default Details;
