import React from 'react';
import "react-typist/dist/Typist.css";

import { HeroComponent, Navbar, HireMe, Projects, Footer, AboutMe } from 'components';

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <HeroComponent />
      <AboutMe />
      <Projects />
      <Footer />
      <HireMe />
    </div>
  );
}

export default App;
