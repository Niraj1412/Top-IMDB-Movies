import React, { useEffect } from 'react';

function Banner(movieBanner) {
    useEffect(()=>{
        console.log("movieBanner",movieBanner);
    })
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-4 bg-gradient-to-t
        from-slate-900 to-transparent w-full rounded-2xl'>
            <h2 className='text-[40px] text-white font-bold '>{movieBanner.movieBanner.name}</h2>
        </div>
        <img src={movieBanner.movieBanner.image}
         className='md:h-[420px] object-top w-full object-cover rounded-2xl'/>
    </div>
  );
}

export default Banner; 
