import React from 'react';
import { HeroComponent, Navbar } from 'components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <div style={{height: "1000px"}} />
    </div>
  );
}

export default App;
