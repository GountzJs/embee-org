/* eslint-disable react-refresh/only-export-components */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './dropdown.module.css';

interface BoxProps {
  children: React.ReactNode;
  isOpen?: boolean;
  isLoading?: boolean;
  error?: string;
}

const Box = ({
  children,
  isLoading = false,
  isOpen = false,
  error,
}: BoxProps) => {
  return (
    <div className={`${styles.box} ${isOpen && styles['box-show']}`}>
      {isLoading && (
        <div className={styles.notification}>Buscando usuarios...</div>
      )}
      {!isLoading && error && (
        <div className={styles.notification}>{error}</div>
      )}
      {!isLoading && !error && children}
    </div>
  );
};

interface ItemProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: React.ReactNode;
}

const Item = ({ children, ...props }: ItemProps) => {
  return (
    <button
      {...props}
      className={`${styles['item-option']} ${props?.className || ''}`}
    >
      {children}
    </button>
  );
};

export const Dropdown = {
  Box,
  Item,
};
