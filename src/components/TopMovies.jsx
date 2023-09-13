import React, { useEffect } from 'react';

function TopMovies({ allmovielist }) {
  useEffect(() => {
    console.log(allmovielist);
  }, []);

  // Sort the movies by IMDb rating in descending order
  const sortedMovies = allmovielist.sort((a, b) => b.imdbRating - a.imdbRating);

  return (
    <div className='mt-5 hidden md:block'>
      <h2 className='font-bold text-[30px] dark:text-white'>Top Movies</h2>
      <div className='md:grid md:grid-cols-3 gap-4 mt-5 lg:grid-cols-4'>
        {sortedMovies?.slice(0, 16).map((item) => (
          <div
            key={item.id}
            className='bg-[#76a8f75e] rounded-lg group hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer'>
            <img
              src={item.image}
              alt={item.name}
              className='h-[270px] rounded-t-lg object-cover'
            />
            <h2 className='dark:text-white p-2 text-[20px] font-bold'>{item.name}</h2>
            <span className='p-2 text-[16px] dark:text-gray-300'>
              IMDb Rating: {item.imbdrating}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopMovies;
