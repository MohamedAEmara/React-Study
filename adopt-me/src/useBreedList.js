// This is a custom hook
// A custom hook is actually a package of other hooks

import { useState, useEffect } from 'react';

const localCache = {};

export default function useBreedList(animal) {
  const [breedList, setBreedList] = useState([]);
  const [status, setStatus] = useState('unloaded');

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }

    async function requestBreedList() {
      setBreedList([]);
      setStatus('loading');

      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );

      const json = await res.json();
      localCache[animal] = json.breeds || [];

      setBreedList(localCache[animal]);
      setStatus('loaded');
    }
  }, [animal]); // We'll run this every time "animal" changes.

  return [breedList, status];
}
