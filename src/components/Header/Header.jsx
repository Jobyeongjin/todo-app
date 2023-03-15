import React, { useState } from 'react';
import styles from './Header.module.css';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import CreateModal from '../Modals/Create/CreateModal';

export default function Header({ setTodoList }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({ title: '', content: '' });

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setValue((prev) => ({ ...prev, [name]: value }));
  };
  const onCreate = (e) => {
    e.preventDefault();

    if (!value.title || !value.content) return;

    const newItem = {
      id: uuidv4(),
      title: value.title,
      content: value.content,
      createdAt: dayjs().format('YY.MM.DD'),
      updatedAt: dayjs().format('YY.MM.DD'),
      isComplete: false,
    };

    setTodoList((prev) => {
      return [...prev, newItem];
    });

    onCloseModal();
    setValue({ title: '', content: '' });
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>todo-list</h1>
      <div className={styles.dateWrap}>
        <time className={styles.date}>date {dayjs().format('YY.MM.DD')}</time>
        <button className={`${styles.addBtn} btnReverse`} onClick={onOpenModal}>
          add
        </button>
      </div>
      <CreateModal
        isOpen={isOpen}
        onClose={onCloseModal}
        value={value}
        onChange={onChange}
        onCreate={onCreate}
      />
    </header>
  );
}
