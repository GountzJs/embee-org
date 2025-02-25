'use client';
import { useState } from 'react';
import styles from './double-image.module.css';

type Props = {
  urlFront: string;
  urlBack: string;
  width?: number;
  height?: number;
};

export function DoubleImage({
  urlFront,
  urlBack,
  width = 200,
  height = 200,
}: Props) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={styles.container}
      style={{
        width,
        height,
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        className={styles['flip-container']}
        style={{
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className={styles['flip-img']}
          style={{
            backgroundImage: `url(${urlFront})`,
          }}
        ></div>
        <div
          className={`${styles['flip-img']} ${styles['back-img']}`}
          style={{
            backgroundImage: `url(${urlBack})`,
          }}
        ></div>
      </div>
    </div>
  );
}
