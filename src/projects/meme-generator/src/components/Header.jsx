import React from 'react';
import styles from './css/Header.module.css';
import logo from '../assets/troll-face.png';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles['header-wrap']}>
        <div className={styles['header-logo']}>
          <div className={styles['header-logo__inner']}>
            <img
              src={logo}
              alt="Troll Face"
              className={styles['header-logo__img']}
            />
          </div>
          <span>Meme Generator</span>
        </div>

        <span>React Course - Project 3</span>
      </div>
    </div>
  );
}
