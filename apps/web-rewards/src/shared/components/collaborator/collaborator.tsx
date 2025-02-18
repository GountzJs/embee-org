import { Tooltip } from '@embeeorg/ui-kit';
import { Link } from 'react-router';
import styles from './collaborator.module.css';

interface Props {
  url: string;
  username: string;
  imgUrl: string;
}

export function Collaborator({ url, username, imgUrl }: Props) {
  return (
    <Tooltip message={username}>
      <Link to={url} className={styles['nav-link']} target="_blank">
        <img
          src={`/${imgUrl}.png`}
          className={styles.avatar}
          width={50}
          height={50}
          alt={`Avatar ${username}`}
        />
      </Link>
    </Tooltip>
  );
}
