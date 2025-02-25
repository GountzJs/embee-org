import Image from 'next/image';
import Link from 'next/link';
import { Tooltip } from '../tooltip';
import styles from './collaborator.module.css';

interface Props {
  username: string;
  url: string;
  socialUrl: string;
}

export function Collaborator({ username, url, socialUrl }: Props) {
  return (
    <Tooltip message={username}>
      <Link
        href={socialUrl}
        className={styles.container}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${username} social network`}
      >
        <Image
          className={styles.avatar}
          src={url}
          loading="lazy"
          height={50}
          width={50}
          alt={`Collaborator ${username}`}
        />
      </Link>
    </Tooltip>
  );
}
