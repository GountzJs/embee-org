import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './input-outline.module.css';

export function InputOutline({
  ...props
}: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) {
  return (
    <input
      {...props}
      className={`${styles['container']} ${props?.className || ''}`}
    />
  );
}
