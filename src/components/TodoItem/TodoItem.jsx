import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import DetailModal from '../Modals/Detail/DetailModal';

export default function TodoItem({ todoList, setTodoList, item }) {
  const { id, title, content, createdAt, updatedAt, isComplete } = item;
  const [isOpen, setIsOpen] = useState(false);

  const onClickTitle = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onClickDelete = (id) => {
    const deleteList = todoList.filter((todo) => todo.id !== id);
    setTodoList(deleteList);
  };

  const handleDelete = () => onClickDelete(id);

  const onClickComplete = (id) => {
    const updatedList = todoList.reduce((acc, cur) => {
      if (cur.id === id) {
        return [...acc, { ...cur, isComplete: !cur.isComplete }];
      }
      return [...acc, cur];
    }, []);

    setTodoList(updatedList);
  };

  const handleComplete = () => onClickComplete(id);

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
          <button className={styles.completeBtn} onClick={handleComplete}>
            {isComplete ? 'incompleted' : 'completed'}
          </button>
          <button className={styles.editBtn}>edit</button>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            delete
          </button>
        </div>
      </li>
      <DetailModal item={item} isOpen={isOpen} onClose={onCloseModal} />
    </>
  );
}
