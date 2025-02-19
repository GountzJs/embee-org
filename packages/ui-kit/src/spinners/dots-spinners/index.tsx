import React from 'react';
import styles from './dots-spinners.module.css';

interface Props {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function DotsSpinner({ size = 60, className = '', style = {} }: Props) {
  return (
    <div
      className={`${styles.loader} ${className}`}
      style={{ width: size, ...style }}
    ></div>
  );
}
