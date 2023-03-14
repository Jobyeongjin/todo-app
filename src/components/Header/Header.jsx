import React from 'react';
import styles from './Header.module.css';
import dayjs from 'dayjs';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>todo-list</h1>
      <div className={styles.dateWrap}>
        <time className={styles.date}>date {dayjs().format('YY.MM.DD')}</time>
        <button className={`${styles.addBtn} btnReverse`}>add</button>
      </div>
    </header>
  );
}
