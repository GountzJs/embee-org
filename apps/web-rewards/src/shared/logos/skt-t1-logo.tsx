import { staticUrl } from "@/core/settings";

interface Props {
  height?: number;
  width?: number;
}

export function SktT1Logo({ height = 65, width = 100 }: Props) {
  return (
    <img
      src={`${staticUrl}/logos/skt-t1.png`}
      loading="lazy"
      height={height}
      width={width}
      alt="SKT T1 Icon"
    />
  );
}
