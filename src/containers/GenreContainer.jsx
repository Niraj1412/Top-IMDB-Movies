import React, { useState } from 'react';
import GenreList from '../components/GenreList'; // Make sure the import path is correct

function GenreContainer() {
  const [selectedGenreId, setSelectedGenreId] = useState(null);
  const [selectedGenresName, setSelectedGenresName] = useState('');

  const genreIdHandler = (id) => {
    setSelectedGenreId(id);
  };

  const selectedGenresNameHandler = (name) => {
    setSelectedGenresName(name);
  };

  return (
    <div>
      {/* Render the GenreList component and pass the handlers as props */}
      <GenreList genreIdHandler={genreIdHandler} selectedGenresNameHandler={selectedGenresNameHandler} />

      {/* You can also display the selectedGenreId and selectedGenresName here */}
      <p>Selected Genre ID: {selectedGenreId}</p>
      <p>Selected Genre Name: {selectedGenresName}</p>
    </div>
  );
}

export default GenreContainer;
