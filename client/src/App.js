import React from 'react';
import './App.css';
import Home from './Components/Home';
import { Router } from '@reach/router';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';



function App() {
  return (
    <div className="App">
      <Router>
      <Home path='/'/>
      <Technologies path='/technologies' />
      <Projects path="/projects" />
      </Router>
    </div>
  );
}

export default App;
