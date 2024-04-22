import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import styles from './App.module.scss';


const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default App;
