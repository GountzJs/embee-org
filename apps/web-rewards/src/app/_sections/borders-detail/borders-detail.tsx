import { ExampleBorder } from '@/borders/components/example-border/example-border';
import { ChipReward } from '@/shared/components/chip-reward/chip-reward';
import { TwitchSvg, Typography } from '@embeeorg/ui-kit';
import { Link } from 'react-router';
import styles from './border-detail.module.css';

export function BorderDetail() {
  return (
    <section className={styles['section-container']}>
      <article className={styles['border-detail-container']}>
        <ExampleBorder />
        <div className={styles['border-detail']}>
          <Typography
            variant="h3"
            family="primary"
            color="primary-light"
            size="4xl"
            weight="extrabold"
          >
            Bordes clasificatorios
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="secondary"
            size="lg"
            weight="regular"
          >
            Un coleccionable con los distintos proplayers que han dejado su
            huella en la escena competitiva, destacando sus mejores momentos en
            diversas competencias internacionales y locales.
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="secondary"
            size="lg"
            weight="regular"
          >
            Con un ranking basado en la cantidad de cartas repetidas que tengas,
            se adapta a tu avatar y usuario de Twitch, además de incluir
            hechizos personalizables.
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="secondary"
            size="lg"
            weight="regular"
          >
            ✨ Ven al stream durante las retransmisiones del competitivo,
            ¡entregaremos bordes únicos en vivo! ✨
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="secondary"
            size="lg"
            weight="semibold"
          >
            ¿Qué esperas para buscar a tu ídolo?
          </Typography>
          <Link
            to={'https://www.twitch.tv/embeejayz'}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <Typography
              variant="p"
              family="secondary"
              color="white"
              size="lg"
              weight="extrabold"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: 'var(--ui-kit-twitch)',
                padding: '8px 26px',
                borderRadius: '6px',
              }}
            >
              <TwitchSvg size={30} />
              Embeejayz
            </Typography>
          </Link>
        </div>
      </article>
      <article className={styles['border-info-container']}>
        <Typography
          variant="h4"
          family="primary"
          color="secondary"
          size="4xl"
          weight="extrabold"
          style={{ width: 'fit-content' }}
        >
          ¿Cómo canjeo los bordes?
        </Typography>
        <div className={styles['chip-rewards-container']}>
          <Typography
            variant="p"
            family="secondary"
            color="white"
            size="xl"
            weight="semibold"
          >
            Canjes por estar en los streams
          </Typography>
          <div className={styles['chip-rewards']}>
            <ChipReward
              url="/rewards-border.png"
              detail="Con puntos del canal"
              height={140}
              width={100}
            />
            <ChipReward
              url="/rewards-match.png"
              detail="Por participar en las retransmisiones del competitivo con el comando !reward"
              width={220}
              height={90}
            />
          </div>
        </div>
        <div className={styles['chip-rewards-container']}>
          <Typography
            variant="p"
            family="secondary"
            color="white"
            size="xl"
            weight="semibold"
          >
            Canjes por apoyar el canal
          </Typography>
          <div className={styles['chip-rewards']}>
            <ChipReward
              url="/bits.png"
              detail="Por cada 100 bits en una sola donación, recibirás un borde aleatorio. Solo cuentan donaciones de 100 bits o más en un solo envío (por ejemplo, 100, 200, 300, etc.). No se suman bits de varias donaciones pequeñas."
              height={250}
              width={180}
            />
            <ChipReward
              url="/sub.png"
              detail="Por cada sub recibirá un borde aleatorio y si regalas subs puedes decidir si quedartela tú o darsela a la persona que le cayó la sub"
              height={100}
              width={250}
            />
          </div>
        </div>
      </article>
    </section>
  );
}
