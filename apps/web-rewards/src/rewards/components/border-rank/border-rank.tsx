import { BorderImage } from '@/rewards/components/border-image';
import { ProplayerCover } from '@/rewards/components/proplayer-cover/proplayer-cover';
import { Rank } from '@/rewards/models/enums/rank.enum';
import { SummonerSpell } from '@/rewards/models/enums/summoner-spell.enum';
import { Typography } from '@embeeorg/ui-kit';
import { IconSummonerSpell } from '../icon-spell/icon-spell';
import styles from './border-rank.module.css';

interface Props {
  rank: Rank;
  url: string;
  username: string;
  avatarUrl: string;
  name: string;
}

export function BorderRank({ rank, url, username, avatarUrl, name }: Props) {
  if (rank === Rank.Challenger)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-challenger']}`}
        >
          <ProplayerCover url={url} width={280} height={445} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-challenger']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={Rank.Challenger} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-challenger']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-challenger']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={47.7}
            width={47}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={47.2}
            width={46}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-challenger']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  if (rank === Rank.Master)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-master']}`}
        >
          <ProplayerCover url={url} width={310} height={465} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-master']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={rank} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-master']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-master']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={47.7}
            width={47}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={47.2}
            width={46}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-master']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  if (rank === Rank.Diamond)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-diamond']}`}
        >
          <ProplayerCover url={url} width={310} height={465} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-diamond']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={rank} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-diamond']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-diamond']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={49.2}
            width={47.8}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={49.2}
            width={46}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-diamond']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  if (rank === Rank.Platinium)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-platinium']}`}
        >
          <ProplayerCover url={url} width={310} height={465} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-platinium']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={rank} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-platinium']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-platinium']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={47}
            width={49}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={47}
            width={47.6}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-platinium']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  if (rank === Rank.Gold)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-gold']}`}
        >
          <ProplayerCover url={url} width={300} height={465} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-gold']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={rank} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-gold']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-gold']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={48.8}
            width={47}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={49}
            width={47.8}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-gold']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  if (rank === Rank.Silver)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-silver']}`}
        >
          <ProplayerCover url={url} width={305} height={465} />
        </div>
        <div
          className={`${styles['card-name-container']} ${styles['card-name-silver']}`}
        >
          <Typography
            className={styles['card-name']}
            variant="p"
            color="white"
            size="2xl"
            family="primary"
            weight="extrabold"
          >
            {name}
          </Typography>
        </div>
        <div className={styles['border-container']}>
          <BorderImage rank={rank} />
        </div>
        <Typography
          className={`${styles.username} ${styles['username-silver']}`}
          variant="p"
          color="white"
          size="base"
          family="primary"
          weight="bold"
        >
          {username}
        </Typography>
        <div
          className={`${styles['summoners-container']} ${styles['summoners-silver']}`}
        >
          <IconSummonerSpell
            spell={SummonerSpell.Flash}
            height={48}
            width={49.4}
          />
          <IconSummonerSpell
            spell={SummonerSpell.Ignite}
            height={48}
            width={47}
          />
        </div>
        <div
          className={`${styles.avatar} ${styles['avatar-silver']}`}
          style={{
            backgroundImage: `url(${avatarUrl})`,
          }}
        ></div>
      </div>
    );

  return (
    <div className={styles.container}>
      <div
        className={`${styles['proplayer-container']} ${styles['proplayer-bronze']}`}
      >
        <ProplayerCover url={url} width={300} height={465} />
      </div>
      <div
        className={`${styles['card-name-container']} ${styles['card-name-bronze']}`}
      >
        <Typography
          className={styles['card-name']}
          variant="p"
          color="white"
          size="2xl"
          family="primary"
          weight="extrabold"
        >
          {name}
        </Typography>
      </div>
      <div className={styles['border-container']}>
        <BorderImage rank={rank} />
      </div>
      <Typography
        className={`${styles.username} ${styles['username-bronze']}`}
        variant="p"
        color="white"
        size="base"
        family="primary"
        weight="bold"
      >
        {username}
      </Typography>
      <div
        className={`${styles['summoners-container']} ${styles['summoners-bronze']}`}
      >
        <IconSummonerSpell
          spell={SummonerSpell.Flash}
          height={49.4}
          width={47.4}
        />
        <IconSummonerSpell
          spell={SummonerSpell.Ignite}
          height={49.6}
          width={49}
        />
      </div>
      <div
        className={`${styles.avatar} ${styles['avatar-bronze']}`}
        style={{
          backgroundImage: `url(${avatarUrl})`,
        }}
      ></div>
    </div>
  );
}
