import React from 'react';
import styles from './tooltip.module.css';

interface Props {
  children: React.ReactNode;
  message: string;
}

export function Tooltip({ children, message }: Props) {
  return (
    <div className={styles.container}>
      {children}
      <span className={styles.tooltip}>{message}</span>
    </div>
  );
}
