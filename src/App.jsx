import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Homepage from './pages/Homepage';
import Header from './components/Header';
import ParentComponent from './components/ParentComponent';
import { ThemeContext } from './Context/ThemeContext';
import TopMovies from './components/TopMovies';

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark');
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === 'dark' ? 'bg-[#121212]' : null} min-h-[100vh]`}>
        <Header />
        <Homepage />
        <ParentComponent movieList={TopMovies} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
