'use client';
import { ChevronIcon } from '@/shared/svgs/icons';
import {
  ButtonHTMLAttributes,
  Children,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from 'react';
import styles from './slider.module.css';

interface Props {
  children: ReactNode;
}

const ButtonLeft = ({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      name="btn-slider-left"
      aria-label="Change content slider to left"
      className={`${styles['btn-chevron']} ${styles['btn-chevron-left']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      <ChevronIcon
        color={
          isHover ? 'var(--ui-kit-primary-700)' : 'var(--ui-kit-primary-500)'
        }
        height={40}
        width={40}
        style={{ transform: 'rotate(-90deg)' }}
      />
    </button>
  );
};

const ButtonRight = ({
  ...props
}: DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <button
      name="btn-slider-right"
      aria-label="Change content slider to right"
      className={`${styles['btn-chevron']} ${styles['btn-chevron-right']}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      {...props}
    >
      <ChevronIcon
        color={
          isHover ? 'var(--ui-kit-primary-700)' : 'var(--ui-kit-primary-500)'
        }
        height={40}
        width={40}
        style={{ transform: 'rotate(90deg)' }}
      />
    </button>
  );
};

export function Slider({ children }: Props) {
  const [itemShow, setItemShow] = useState(0);
  const arrayChildren = Children.toArray(children);
  const hasMultipleChildren = arrayChildren.length > 1;

  const nextSlide = () =>
    setItemShow((prev) => (prev === arrayChildren.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setItemShow((prev) => (prev === 0 ? arrayChildren.length - 1 : prev - 1));

  return (
    <div className={styles.container}>
      {hasMultipleChildren && <ButtonLeft onClick={prevSlide} />}
      <div className={styles.slide}>{arrayChildren[itemShow]}</div>
      {hasMultipleChildren && <ButtonRight onClick={nextSlide} />}
    </div>
  );
}
