import { BorderImage } from '@/borders/components/border-image';
import { BorderProplayer } from '@/borders/components/proplayer-cover/border-proplayer';
import { SummonerSpell } from '@/borders/models/enums/summoner-spell.enum';
import { montserrat } from '@/consts/fonts';
import { Rank } from '@/ranking/models/enums/rank.enum';
import { Typography } from '@embeeorg/ui-kit';
import Image from 'next/image';
import { IconSummonerSpell } from '../icon-spell/icon-spell';
import styles from './border-rank.module.css';

interface Props {
  rank: Rank;
  url: string;
  username: string;
  avatarUrl: string;
  name: string;
}

interface BorderProps {
  url: string;
  username: string;
  avatarUrl: string;
  name: string;
}

const BorderChallenger = ({ url, name, username, avatarUrl }: BorderProps) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles['proplayer-container']} ${styles['proplayer-challenger']}`}
      >
        <BorderProplayer url={url} width={280} height={445} />
      </div>
      <div
        className={`${styles['card-name-container']} ${styles['card-name-challenger']}`}
      >
        <h4 className={`${montserrat.className} ${styles['card-name']}`}>
          {name}
        </h4>
      </div>
      <div className={styles['border-container']}>
        <BorderImage rank={Rank.Challenger} />
      </div>
      <p className={`${styles.username} ${styles['username-challenger']}`}>
        {username}
      </p>
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
      <Image
        className={`${styles.avatar} ${styles['avatar-challenger']}`}
        src={avatarUrl}
        loading="eager"
        width={70}
        height={70}
        alt={`Avatar ${username}`}
      />
    </div>
  );
};

export function BorderRank({ rank, url, username, avatarUrl, name }: Props) {
  if (rank === Rank.Challenger)
    return (
      <BorderChallenger
        url={url}
        username={username}
        avatarUrl={avatarUrl}
        name={name}
      />
    );

  if (rank === Rank.Master)
    return (
      <div className={styles.container}>
        <div
          className={`${styles['proplayer-container']} ${styles['proplayer-master']}`}
        >
          <BorderProplayer url={url} width={310} height={465} />
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
          <BorderProplayer url={url} width={310} height={465} />
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
          <BorderProplayer url={url} width={310} height={465} />
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
          <BorderProplayer url={url} width={300} height={465} />
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
          <BorderProplayer url={url} width={305} height={465} />
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
        <BorderProplayer url={url} width={300} height={465} />
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
