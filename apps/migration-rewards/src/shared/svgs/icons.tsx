import { SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {
  color?: string;
}

export const HomeIcon = ({ color = '#fff', ...props }: Props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke={color}
        style={{
          transition: 'color 200ms ease-in-out',
        }}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20H7a2 2 0 0 1-2-2v-7.08A2 2 0 0 1 5.698 9.4l5-4.285a2 2 0 0 1 2.604 0l5 4.285A2 2 0 0 1 19 10.92V18a2 2 0 0 1-2 2h-2m-6 0v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6m-6 0h6"
      />
    </svg>
  );
};

export const RankingIcon = ({ color = '#fff', ...props }: Props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeWidth={1.5}
        style={{
          transition: 'color 200ms ease-in-out',
        }}
        d="M16 22v-9c0-1.414 0-2.121-.44-2.56C15.122 10 14.415 10 13 10h-2c-1.414 0-2.121 0-2.56.44C8 10.878 8 11.585 8 13v9M8 22c0-1.414 0-2.121-.44-2.56C7.122 19 6.415 19 5 19c-1.414 0-2.121 0-2.56.44C2 19.878 2 20.585 2 22M22 22v-3c0-1.414 0-2.121-.44-2.56C21.122 16 20.415 16 19 16c-1.414 0-2.121 0-2.56.44C16 16.878 16 17.585 16 19v3"
      />
      <path
        stroke={color}
        strokeWidth={1.5}
        style={{
          transition: 'color 200ms ease-in-out',
        }}
        d="M11.146 3.023C11.526 2.34 11.716 2 12 2c.284 0 .474.34.854 1.023l.098.176c.108.194.162.29.246.354.085.064.19.088.4.135l.19.044c.738.167 1.107.25 1.195.532.088.283-.164.577-.667 1.165l-.13.152c-.143.167-.215.25-.247.354-.032.104-.021.215 0 .438l.02.203c.076.785.114 1.178-.115 1.352-.23.175-.576.015-1.267-.303l-.178-.082c-.197-.09-.295-.136-.399-.136-.104 0-.202.046-.399.136l-.178.082c-.691.318-1.037.478-1.267.303-.23-.174-.191-.567-.115-1.352l.02-.203c.021-.223.032-.334 0-.438-.032-.103-.104-.187-.247-.354l-.13-.152c-.503-.588-.755-.882-.667-1.165.088-.282.457-.365 1.195-.532l.19-.044c.21-.047.315-.07.4-.135.084-.064.138-.16.246-.354l.098-.176Z"
      />
    </svg>
  );
};

export const ChevronIcon = ({ color = '#fff', ...props }: Props) => {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m6 15 6-6 6 6"
      />
    </svg>
  );
};

export const TwitchIcon = ({ color = '#fff', ...props }: Props) => {
  return (
    <svg viewBox="0 0 32 32" fill={color} {...props}>
      <title>{'twitch'}</title>
      <path d="m26.711 14.929-4.284 4.284h-4.285l-3.749 3.749v-3.749h-4.82V3.146h17.138zM8.502 1.004 3.146 6.36v19.279h6.427v5.356l5.356-5.356h4.284l9.641-9.64V1.003zm12.854 5.891h2.142v6.427h-2.142zm-5.892 0h2.143v6.427h-2.144z" />
    </svg>
  );
};
