import React, { useState } from 'react';
import GenreList from './GenreList'; // Import GenreList component
import MoviesByGenresId from './MoviesByGenresId'; // Import MoviesByGenresId component
import TopMovies from './TopMovies'; // Import your top movies data
import {getAllMovies} from '../Services/GlobalApi'; // Import your all movies data

function ParentComponent() {
  // Initialize the selected genre state and a function to update it
  const [selectedGenreId, setSelectedGenreId] = useState(''); // Set initial genre ID
  const [selectedGenresName, setSelectedGenresName] = useState(''); // Set initial genre name

  // Handle genre selection and update selected genre ID and name
  const handleGenreSelection = (genreId, genreName) => {
    setSelectedGenreId(genreId);
    setSelectedGenresName(genreName);
  };

  // Determine the movie list to display based on the selected genre
  const movieListToDisplay = selectedGenreId === '' ? TopMovies : getAllMovies;

  return (
    <div>
      {/* Render GenreList and pass the selection handler */}
      {/* <GenreList
        genreIdHandler={handleGenreSelection}
        selectedGenresName={selectedGenresName}
      /> */}
      {/* Render MoviesByGenresId based on the selected genre */}
      <MoviesByGenresId
        movieList={movieListToDisplay}
        selectedGenresName={selectedGenresName}
      />
    </div>
  );
}

export default ParentComponent;
