import React, { useEffect } from 'react';
// Removed unused Portfolio import

function App() {
  useEffect(() => {
    window.location.href = 'https://darianbaker.eu/'; // Redirect to the portfolio URL
  }, []);
  
  // Added basic styling without Tailwind
  const redirectStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    fontSize: '24px',
    color: '#0284c7',
    backgroundColor: '#f0f9ff'
  };
  
  return <div style={redirectStyle}>Redirecting to portfolio...</div>;
}

export default App;