import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import styles from './input-outline.module.css';

export function InputOutline({
  error = false,
  ...props
}: DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & { error?: boolean }) {
  return (
    <input
      {...props}
      className={`${styles['container']} ${error && styles['error']} ${props?.className || ''}`}
    />
  );
}
