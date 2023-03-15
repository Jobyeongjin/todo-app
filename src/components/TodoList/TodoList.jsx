import React, { useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import Header from '../Header/Header';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <Header setTodoList={setTodoList} />
      <ul className={styles.todoList}>
        {todoList.map((item) => {
          return (
            <TodoItem
              todoList={todoList}
              setTodoList={setTodoList}
              item={item}
            />
          );
        })}
        {todoList.length === 0 && (
          <p className={styles.empty}>Add something to do.</p>
        )}
      </ul>
    </>
  );
}
