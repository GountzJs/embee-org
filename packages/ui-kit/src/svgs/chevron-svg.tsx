import * as React from 'react';

interface Props {
  color?: string;
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}

export function ChevronSvg({
  color = '#fff',
  size = 40,
  style = {},
  className = '',
}: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={style}
      className={className}
    >
      <title>{'arrow-down-square'}</title>
      <path
        fill={color}
        fillRule="evenodd"
        d="M30 28c0 1.1-.896 2-2 2H4c-1.104 0-2-.9-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24ZM28 0H4a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm-6.879 16.465L17 20.59V10a1 1 0 1 0-2 0v10.59l-4.121-4.125a1 1 0 1 0-1.414 1.415l5.656 5.66c.24.24.568.31.879.25.311.06.639-.01.879-.25l5.656-5.66a1 1 0 1 0-1.414-1.415Z"
      />
    </svg>
  );
}
