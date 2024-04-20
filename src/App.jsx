import { useState } from 'react';
import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.app}>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App;
