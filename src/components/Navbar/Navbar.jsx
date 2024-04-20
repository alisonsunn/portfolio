import React, { useState } from 'react';
import styles from './Navbar.module.scss';
import getURL from '../../utils.js';


export const Navbar = () => {

  const [menuOpen,setmenu] = useState(false);

  const changeIconState = () => {
    if (menuOpen === false) {
      return getURL('explore.png');
    } else {
      return getURL('close.png');
    }
  }

  return (
    <div className={styles.portfolio}>
      <span>Portfolio</span>
      <img onClick={()=> {setmenu(!menuOpen)}} src={changeIconState()} alt="explore.png" />
      <ul onClick={()=>{setmenu(false)}} className={`${menuOpen && styles.menuOpen }`}>
        <li>About</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar;
