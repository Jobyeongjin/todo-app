import React from 'react';
import styles from './DetailModal.module.css';
import { MdCancel } from 'react-icons/md';

export default function DetailModal({ item, isOpen, onClose }) {
  if (!isOpen) return null;
  const { title, content, createdAt, updatedAt, isComplete } = item;

  return (
    <div className={styles.detailModalWrapper}>
      <aside>
        <MdCancel className={styles.cancel} onClick={onClose} />
        <h1 className={styles.modalTitle}>title</h1>
        <p>{title}</p>
        <h1 className={styles.modalTitle}>content</h1>
        <p>{content}</p>
        <h1 className={styles.modalTitle}>createdAt</h1>
        <p>{createdAt}</p>
        <h1 className={styles.modalTitle}>updatedAt</h1>
        <p>{updatedAt}</p>
        <h1 className={styles.modalTitle}>complete</h1>
        <p>{isComplete ? 'true' : 'false'}</p>
      </aside>
    </div>
  );
}
