import styles from './circle-spinner.module.css';

interface Props {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}

export function CircleSpinner({
  size = 60,
  className = '',
  color = '#000',
  style = {},
}: Props) {
  return (
    <div
      className={`${styles.loader} ${className}`}
      style={{
        border: `8px solid ${color}`,
        width: size,
        ...style,
      }}
    ></div>
  );
}
