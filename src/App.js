import React from 'react';
import { HeroComponent, Navbar, HireMe, Projects } from 'components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <Projects />
      <HireMe />
    </div>
  );
}

export default App;
