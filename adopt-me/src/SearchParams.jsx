import { useState, useEffect } from 'react';
import Pet from './Pet';
import useBreedList from './useBreedList';
const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

let cnt = 0;
const SearchParams = () => {
  cnt++;
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]); // Empty array that we'll retrieve later from the API
  const [breeds] = useBreedList(animal);  // Now, breeds will be added based on the choice of the animal

  // NOTE: by default, "useEffect" renders everytime a change happens
  //    but we don't it to act this way.
  // We can put a dependency that triggers calling this function
  useEffect(
    () => {
      requestPets();
    },
    [
      /*requestPets*/
    ]
  ); // For example here. in the commented part, I told it to rerun if a change happens to (requestPets)

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&city=${location}`
    );

    const json = await res.json();
    console.log(json);
    console.log('------------------------');
    console.log(res);
    setPets(json.pets);
  }
  return (
    // We use parentheses to tell JS that we will return in the next line.
    // NOTE: "class" is a reserverd keyword for JS so we used (className) instead.

    <div className="search-params">
      <h1> {cnt} </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets(); // Now fetching from the API won't happen until we click the submit button.
        }}
      >
        <label htmlFor="location">
          Location:
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            value={location}
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
          >
            <option />
            {/* This map returns an array of <option> with key and textContent equal the value of the element  */}
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label htmlFor="animal">
          Breed:
          <select
            id="breed"
            disabled={breeds.length === 0}
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          >
            <option />
            {/* This map returns an array of <option> with key and textContent equal the value of the element  */}
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </form>
      {pets.map((pet) => {
        <Pet
          name={pet.name}
          animal={pet.animal}
          breed={pet.breed}
          key={pet.id}
        />;
      })}
    </div>
  );
};

export default SearchParams;
