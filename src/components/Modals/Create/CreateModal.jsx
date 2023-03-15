import React from 'react';
import styles from './CreateModal.module.css';
import { MdCancel } from 'react-icons/md';

export default function CreateModal({
  isOpen,
  onClose,
  value,
  onChange,
  onCreate,
}) {
  if (!isOpen) return null;

  return (
    <div className={styles.createModalWrapper}>
      <aside>
        <MdCancel className={styles.cancel} onClick={onClose} />
        <form onSubmit={onCreate}>
          <h1 className='modalTitle'>title</h1>
          <input
            type='text'
            placeholder='제목을 입력해주세요.'
            name='title'
            value={value.title}
            onChange={onChange}
          />
          <h1 className='modalTitle'>content</h1>
          <textarea
            rows={12}
            placeholder='내용을 입력해주세요.'
            name='content'
            value={value.content}
            onChange={onChange}
          ></textarea>
          <button type='submit' className={styles.addBtn}>
            add
          </button>
        </form>
      </aside>
    </div>
  );
}
