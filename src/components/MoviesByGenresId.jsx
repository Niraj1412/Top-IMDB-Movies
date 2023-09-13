import React, { useEffect } from 'react';

function MoviesByGenresId({ movieList, selectedGenresName }) {
  useEffect(() => {
    
  }, []);

  return (
    <div>
      {/* <h2 className='font-bold text-[30px] dark:text-white mt-5'>
        {selectedGenresName} Movies
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5'>
        {movieList.map((item) => (
          <div
            key={item.id}
            className='bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[80%] rounded-xl object-cover'
            />
            <h2 className='text-[20px] dark:text-white font-bold'>
              {item.title}
              <span className='p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium'>
                {item.imbdrating}
              </span>
            </h2>
            <h2 className='text-gray-500 dark:text-gray-300'>
              ⭐{item.vote_average} 💬{item.vote_count}
            </h2>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default MoviesByGenresId;
