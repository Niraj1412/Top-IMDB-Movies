import React, { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../Context/ThemeContext'; // Make sure ThemeContext is imported correctly

function GenreList({ genreIdHandler, selectedGenresNameHandler }) {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useContext(ThemeContext); // Ensure that ThemeContext is available and properly set up

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'https://movie-api-swagger-ui.onrender.com/api/genres';

    try {
      const response = await fetch(url);
      const result = await response.json();
      setGenreList(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`px-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
      <h2 className={`text-[30px] font-bold ${theme === 'dark' ? 'dark:text-white' : 'dark:text-black'}`}>Genres</h2>
      {genreList.map((item, index) => (
        <div
          key={item._id}
          onClick={() => {
            setActiveIndex(index);
            genreIdHandler(item._id);
            selectedGenresNameHandler(item.name);
          }}
          className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg hover:dark:bg-gray-600 ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : ''}`}
        >
          <h3
            className={`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex === index ? 'font-bold' : ''} ${theme === 'dark' ? 'dark:text-white' : 'dark:text-black'}`}
          >
            {item.name}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
