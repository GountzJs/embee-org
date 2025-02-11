import { staticUrl } from '@/core/settings';

interface Props {
  height?: number;
  width?: number;
}

export function T1Logo({ height = 50, width = 80 }: Props) {
  return (
    <img
      src={`${staticUrl}/logos/t1.png`}
      loading="lazy"
      height={height}
      width={width}
      alt="T1 Icon"
    />
  );
}
