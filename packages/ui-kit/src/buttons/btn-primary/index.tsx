import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styles from './btn-primary.module.css';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

export function BtnPrimary({ children, ...props }: Props) {
  return (
    <button {...props} className={`${styles.btn} ${props?.className || ''}`}>
      {children}
    </button>
  );
}
