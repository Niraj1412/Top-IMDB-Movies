import React, { useContext, useEffect, useState } from 'react';
import GenreList from '../components/GenreList';
import { ThemeContext } from '../Context/ThemeContext';
import Banner from '../components/Banner';
import { getAllMovies, getMovieListByGenreId as fetchMoviesByGenreId } from '../Services/GlobalApi';
import TopMovies from '../components/TopMovies';
import MoviesByGenresId from '../components/MoviesByGenresId';



function Homepage() {
  useEffect(() => {
    getAllMoviesList();
    fetchMoviesByGenreId();
  }, []);


  const { theme } = useContext(ThemeContext);
  const [movies, setMovies] = useState([]);
  const [movieListByGenres, setMovieListByGenres] = useState([]);
  const [selectedGenresName, setSelectedGenresName] = useState('Action');

  const getAllMoviesList = () => {
    getAllMovies()
      .then((resp) => {
        console.log(resp.data);
        setMovies(resp.data); // Assuming you want to set the movies state with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }

  const getMovieListByGenreId = (id) => {
    fetchMoviesByGenreId(id)
      .then((resp) => {
        setMovieListByGenres(resp.data.results);
      })
      .catch((error) => {
        console.error('Error fetching movies by genre:', error);
      });
  };

  return (
    <div className={`grid grid-cols-4 bg-${theme.value} text-${theme.value === 'dark' ? 'white' : 'black'}`}>
      <div className='hidden md:block'>
        <GenreList />
      </div>
      <div className={`col-span-4 md:col-span-3 h-full`}>
        {movies?.length> 0 ?
      <div>
        <Banner movieBanner={movies[19]} />
        <TopMovies allmovielist={movies}/>
        <MoviesByGenresId movieList={movieListByGenres} selectedGenresName={selectedGenresName} />
      </div>
      :null}
    </div>
    </div>
  );
}

export default Homepage;
