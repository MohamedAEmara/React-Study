import Pet from './Pet';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            animal={pet.animal}
            key={pet.id}
            breed={pet.breed}
            location={`${pet.city}, ${pet.state}`}
            images={pet.images}
            name={pet.name}
          />
        ))
      )}
    </div>
  );
};

export default Results;
