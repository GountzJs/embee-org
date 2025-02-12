import { useGetUserInfo } from '@/auth/hooks/use-get-user-info.ts';
import { Typography } from '@embeeorg/ui-kit';
import styles from './user-detail.module.css';

export function UserDetail() {
  const { data, isLoading, error } = useGetUserInfo();

  if (isLoading)
    return (
      <div className={styles.container}>
        <Typography
          variant="p"
          family="secondary"
          color="white"
          size="base"
          weight="extrabold"
        >
          Cargando información...
        </Typography>
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <Typography
          variant="p"
          family="secondary"
          color="white"
          size="base"
          weight="extrabold"
        >
          {error}
        </Typography>
      </div>
    );

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        alt={`Avatar ${data?.login}`}
        width={30}
        height={30}
        src={data?.profile_image_url}
      />
      <Typography
        variant="p"
        family="secondary"
        color="white"
        size="base"
        weight="extrabold"
      >
        {data?.login}
      </Typography>
    </div>
  );
}
