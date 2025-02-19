/* eslint-disable react-refresh/only-export-components */
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { CircleSpinner } from '../../spinners';
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
        <div
          className={styles.notification}
          style={{
            display: 'flex',
            width: '100%',
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircleSpinner color="var(--ui-kit-primary-500)" size={40} />
        </div>
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
  style?: React.CSSProperties;
  ref?: React.Ref<HTMLButtonElement>;
}

const Item = ({ children, style = {}, ...props }: ItemProps) => {
  return (
    <button
      {...props}
      className={`${styles['item-option']} ${props?.className || ''}`}
      style={style}
    >
      {children}
    </button>
  );
};

export const Dropdown = {
  Box,
  Item,
};
