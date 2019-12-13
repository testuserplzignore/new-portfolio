import React from 'react';
import "react-typist/dist/Typist.css";

import { HeroComponent, Navbar, HireMe, Projects, Footer } from 'components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <Projects />
      <Footer />
      <HireMe />
    </div>
  );
}

export default App;
