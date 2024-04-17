// import React from 'react';
import { createRoot } from 'react-dom/client';
// import Pet from './Pet';
import SearchParams from './SearchParams';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Details from './Details';

const App = () => {
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
  // return React.createElement(
  //   'div', // Element type
  //   { id: 'my-id' }, // Attributes of the element like id, class,
  //   [
  //     React.createElement('h1', {}, 'Adopt me...'),
  //     React.createElement(Pet, {
  //       name: 'Luna',
  //       animal: 'Dog',
  //       breed: 'Havanese',
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Pepper',
  //       animal: 'Bird',
  //       breed: 'Cockatiel',
  //     }),
  //     React.createElement(Pet, {
  //       name: 'Doink',
  //       animal: 'Cat',
  //       breed: 'Mixed',
  //     }),
  //   ]
  // );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
