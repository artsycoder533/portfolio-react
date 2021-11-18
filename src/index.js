import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Projects } from './Projects';

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}



ReactDOM.render(<Portfolio />, document.getElementById("root"));