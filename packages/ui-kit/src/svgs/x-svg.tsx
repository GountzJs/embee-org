interface Props {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function XSvg({
  color = '#fff',
  size = 40,
  style = {},
  className = '',
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      className={className}
    >
      <title>{'Close'}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          stroke={color}
          strokeLinecap="round"
          strokeWidth={2}
          d="M17 7 7 17M7 7l10 10"
        />
      </g>
    </svg>
  );
}
