import { useState } from 'react';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile'];

let cnt = 0;
const SearchParams = () => {
  cnt++;
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const breeds = [];

  return (
    // We use parentheses to tell JS that we will return in the next line.
    // NOTE: "class" is a reserverd keyword for JS so we used (className) instead.

    <div className="search-params">
      <h1> {cnt} </h1>
      <form action="">
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
            onChange={(e) => setbreed(e.target.value)}
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
    </div>
  );
};

export default SearchParams;
