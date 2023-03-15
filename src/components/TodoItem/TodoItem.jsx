import React, { useState } from 'react';
import styles from './TodoItem.module.css';
import DetailModal from '../Modals/Detail/DetailModal';
import UpdateModal from '../Modals/Update/UpdateModal';
import dayjs from 'dayjs';

export default function TodoItem({ todoList, setTodoList, item }) {
  const { id, title, content, createdAt, updatedAt, isComplete } = item;
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [value, setValue] = useState({ title, content });

  const onOpenModal = () => {
    setIsOpen(true);
  };
  const onCloseModal = () => {
    setIsOpen(false);
  };
  const onOpenUpdateModal = () => {
    setIsUpdateOpen(true);
  };
  const onCloseUpdateModal = () => {
    setIsUpdateOpen(false);
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

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onUpdate = (e) => {
    e.preventDefault();

    if (!value.title || !value.content) return;

    const UpdateTodoList = todoList.map((todo) => {
      if (todo.id === item.id) {
        return {
          ...todo,
          title: value.title,
          content: value.content,
          updatedAt: dayjs().format('YY.MM.DD HH:mm:ss'),
        };
      } else {
        return todo;
      }
    });
    setTodoList(UpdateTodoList);

    onCloseUpdateModal();
  };

  return (
    <>
      <li
        className={`${styles.todoItem} ${isComplete ? styles.complete : ''}`}
        key={id}
      >
        <div>
          <div className={styles.title} onClick={onOpenModal}>
            {title}
          </div>
          <time className={styles.date}>{createdAt}</time>
        </div>
        <div className={styles.btns}>
          <button className={styles.completeBtn} onClick={handleComplete}>
            {isComplete ? 'incompleted' : 'completed'}
          </button>
          <button className={styles.editBtn} onClick={onOpenUpdateModal}>
            edit
          </button>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            delete
          </button>
        </div>
      </li>
      <DetailModal item={item} isOpen={isOpen} onClose={onCloseModal} />
      <UpdateModal
        isOpen={isUpdateOpen}
        onClose={onCloseUpdateModal}
        value={value}
        onChange={onChange}
        onUpdate={onUpdate}
      />
    </>
  );
}
