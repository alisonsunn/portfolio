import React, { useState } from 'react';
import styles from './Hero.module.scss';
import getURL from '../../utils';

export const Hero = () => {

  const [openEmail, setEmail] = useState(false);

  return (
    <section className={styles.container}>
      <img id={styles.Ellipse1} src={getURL('Ellipse 1.png')} alt="" />
      <img id={styles.Ellipse2} src={getURL('Ellipse 2.png')} alt="" />
      <div className={styles.content}>
        <h1>Hi, I'm Alison</h1>
        <p>I’m a full-stack developer with 5 years
          of experience using React and NodeJS.
          Reach out if you’d like to learn more!</p>
        <a onClick={()=> {setEmail(!openEmail)}}>Contact me</a>
        <span className={`${openEmail && styles.showSpan}`}>alison.jyue.sun@gmail.com</span>
      </div>
      <div className={styles.image}>
        <img src={getURL('me.png')} alt="portfolio picture" />
      </div>
    </section>
  )
}

export default Hero;
