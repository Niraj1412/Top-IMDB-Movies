import React, { useContext, useEffect, useState } from 'react';
import logo from './../assets/images/logo.png';
import { HiMagnifyingGlass, HiMoon, HiSun } from 'react-icons/hi2';
import { ThemeContext } from '../Context/ThemeContext';

function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log('Theme', theme.value);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = toggle ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    setToggle(!toggle);
  };

  return (
    <div className={`flex items-center p-3 ${theme.value === 'dark' ? 'text-white' : 'text-black'}`}>
      <img src={logo} width={60} height={60} />
      <div className={`flex bg-slate-200 p-2 w-full mx-5 rounded-full items-center ${theme.value === 'dark' ? 'bg-dark' : ''}`}>
        <HiMagnifyingGlass />
        <input type="text" placeholder='Search Movies' className='px-2 bg-transparent outline-none' />
      </div>
      <div>
        {toggle ? (
          <HiMoon className={`text-[35px] p-1 rounded-full cursor-pointer ${theme.value === 'dark' ? 'text-white bg-slate-200' : 'text-black bg-white'}`} onClick={toggleTheme} />
        ) : (
          <HiSun className={`text-[35px] p-1 rounded-full cursor-pointer ${theme.value === 'dark' ? 'text-white bg-slate-200' : 'text-black bg-white'}`} onClick={toggleTheme} />
        )}
      </div>
    </div>
  );
}

export default Header;
