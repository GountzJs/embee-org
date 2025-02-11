import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './typography.module.css';

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  color?:
    | 'white'
    | 'black'
    | 'primary-light'
    | 'primary'
    | 'primary-dark'
    | 'secondary-light'
    | 'secondary'
    | 'secondary-dark';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl';
  family?: 'primary' | 'secondary';
  weight?: 'light' | 'normal' | 'regular' | 'semibold' | 'bold' | 'extrabold';
  children: React.ReactNode;
}

export function Typography({
  children,
  variant = 'p',
  color = 'white',
  size = 'base',
  family = 'secondary',
  weight = 'normal',
}: Props) {
  const Element = variant;

  return (
    <Element
      className={`${styles.text} ${styles[`color-${color}`]} ${
        styles[`font-${family}`]
      } ${styles[`font-size-${size}`]} ${styles[`font-weight-${weight}`]}`}
    >
      {children}
    </Element>
  );
}
