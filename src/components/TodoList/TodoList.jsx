import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';

const DUMMY_LIST = [
  {
    id: uuidv4(),
    title: 'title-01',
    content: 'content-01',
    createdAt: dayjs().format('YY.MM.DD'),
    updatedAt: dayjs().format('YY.MM.DD'),
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: 'title-02',
    content: 'content-02',
    createdAt: dayjs().format('YY.MM.DD'),
    updatedAt: dayjs().format('YY.MM.DD'),
    isComplete: false,
  },
];

export default function TodoList() {
  const [todoList, setTodoList] = useState(DUMMY_LIST);

  return (
    <ul className={styles.todoList}>
      {todoList.map((item) => {
        return <TodoItem item={item} />;
      })}
      {todoList.length === 0 && (
        <p className={styles.empty}>Add something to do.</p>
      )}
    </ul>
  );
}
