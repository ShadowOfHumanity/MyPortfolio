import React, { useEffect } from 'react';
import Portfolio from './components/Portfolio';

function App() {
  useEffect(() => {
    window.location.href = 'https://shadowofhumanity.github.io/Portfolio-New/';
  }, []);
  
  return <div>Redirecting...</div>; // This briefly shows before redirection
}

export default App;