import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import DetailModal from '../Modals/Detail/DetailModal';

export default function TodoItem({ item }) {
  const { id, title, content, createdAt, updatedAt, isComplete } = item;
  const [isOpen, setIsOpen] = useState(false);

  const onClickTitle = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li
        className={`${styles.todoItem} ${isComplete ? styles.complete : ''}`}
        key={id}
      >
        <div>
          <div className={styles.title} onClick={onClickTitle}>
            {title}
          </div>
          <time className={styles.date}>{createdAt}</time>
        </div>
        <div className={styles.btns}>
          <button className={styles.completeBtn}>
            {isComplete ? 'incompleted' : 'completed'}
          </button>
          <button className={styles.editBtn}>edit</button>
          <button className={styles.deleteBtn}>delete</button>
        </div>
      </li>
      <DetailModal item={item} isOpen={isOpen} onClose={onCloseModal} />
    </>
  );
}
