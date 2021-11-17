import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Navbar } from './Navbar';
import { Hero } from './Hero';

function Portfolio() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}



ReactDOM.render(<Portfolio />, document.getElementById("root"));