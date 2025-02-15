interface Props extends React.SVGProps<SVGSVGElement> {
  color?: string;
  size?: number;
}

export const TwitchSvg = ({ color = '#fff', size = 40, ...props }: Props) => (
  <svg {...props} fill={color} width={size} height={size} viewBox="0 0 512 512">
    <title>{'ionicons-v5_logos'}</title>
    <path d="m80 32-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256-64 64h-96l-64 64v-64h-80V80h304Z" />
    <path d="M320 143h48v129h-48zM208 143h48v129h-48z" />
  </svg>
);
