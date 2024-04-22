import React from 'react';
import getURL from '../../utils';
import styles from './About.module.scss';

const About = () => {
  return (
    <section>
      <div className={styles.container}>
        <h3>ABOUT</h3>
        <div className={styles.content}>
          <div id={styles.me}>
            <img src={getURL('me.png')} alt="my-pic" />
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <img src={getURL('archer.png')} alt="archer.png" />
              <div className={styles.words}>
                <h4>Frontend Developer</h4>
                <p>I’m a front-end developer with experience
                  in building responsive and optimized sites</p>
              </div>
            </div>
            <div className={styles.detail}>
              <img src={getURL('box.png')} alt="box.png" />
              <div className={styles.words}>
                <h4>Backend Developer</h4>
                <p>I have experience developing fast and
                  optimised back-end systems and APIs</p>
              </div>
            </div>
            <div className={styles.detail}>
              <img src={getURL('calculator.png')} alt="calculator.png" />
              <div className={styles.words}>
                <h4>UI Designer</h4>
                <p>I have designed multiple landing pages and
                  have created design systems as well</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
