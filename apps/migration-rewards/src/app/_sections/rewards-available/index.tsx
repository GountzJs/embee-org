import { montserrat } from '@/consts/fonts';
import { Slider } from '@/shared/components/slider';
import styles from './rewards-available.module.css';

export function RewardsAvailable() {
  return (
    <section className={styles.container}>
      <h3 className={`${montserrat.className} ${styles['title-section']}`}>
        Recompensas disponibles
      </h3>
      <Slider>
        <div className={styles['border-reward']}>
          <h4 className={`${montserrat.className} ${styles['border-title']}`}>
            Bordes clasificatorios
          </h4>
          <img
            className={styles['border-img']}
            src="https://embee-org.github.io/embee-statics/images/proplayers/faker/default.png"
            alt="Faker embee"
            width={330}
            height={594}
            style={{
              objectFit: 'contain',
            }}
          />
          <div className={styles['border-detail']}>
            <p>
              Un coleccionable con los distintos <strong>proplayers</strong> que
              han dejado su huella en la escena competitiva, destacando sus
              mejores momentos en diversas competencias internacionales y
              locales.
            </p>
            <p>
              Con un <strong>marco clasificatorio</strong> basado en la cantidad
              de bordes repetidos, se adapta a tu avatar y usuario de{' '}
              <strong>Twitch</strong>, además de incluir hechizos
              personalizables.
            </p>
            <p>
              ✨ Ven al <strong>stream</strong> durante las retransmisiones del{' '}
              <strong>competitivo</strong>, ¡entregaremos bordes únicos en vivo!
              ✨
            </p>
            <p>¿Qué esperas para buscar a tu ídolo?</p>
          </div>
        </div>
      </Slider>
    </section>
  );
}
