import { staticUrl } from '@/core/settings';

interface Props {
  size?: number;
}

export function EmbeeLogo({ size = 50 }: Props) {
  return (
    <img
      src={`${staticUrl}/images/embee/avatar.jpg`}
      loading="lazy"
      height={size}
      width={size}
      alt="Embeejayz Avatar Icon"
      style={{ borderRadius: '50%' }}
    />
  );
}
