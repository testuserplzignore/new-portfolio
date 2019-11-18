import React from 'react';
import { HeroComponent, Navbar, HireMe, Projects, Footer } from 'components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <Projects />
      <HireMe />
      <Footer />
    </div>
  );
}

export default App;
