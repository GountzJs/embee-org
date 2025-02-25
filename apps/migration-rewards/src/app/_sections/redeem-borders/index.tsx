import { montserrat } from '@/consts/fonts';
import { Slider } from '@/shared/components/slider';
import Image from 'next/image';
import styles from './redeem-borders.module.css';

export function RedeemBorders() {
  return (
    <section className={styles.container}>
      <h2 className={`${montserrat.className} ${styles['title-section']}`}>
        ¿Cómo canjeo los bordes?
      </h2>
      <Slider>
        <div className={styles['box-redeem']}>
          <h3 className={`${montserrat.className} ${styles['border-title']}`}>
            Por particiar de los streams
          </h3>
          <div className={styles['reward-detail-container']}>
            <div className={styles['reward-detail']}>
              <Image
                src="/images/rewards-border.png"
                height={138}
                width={101}
                alt="Reward points channel"
              />
              <p className={styles['reward-detail-description']}>
                Con puntos del canal
              </p>
            </div>
            <div className={styles['reward-detail']}>
              <Image
                src="/images/rewards-match.png"
                height={124}
                width={327}
                alt="Reward match"
              />
              <p className={styles['reward-detail-description']}>
                Por estar en las retransmisiones del competitivo
              </p>
            </div>
          </div>
        </div>
        <div className={styles['box-redeem']}>
          <h3 className={`${montserrat.className} ${styles['border-title']}`}>
            Por apoyar el canal
          </h3>
          <div className={styles['reward-detail-container']}>
            <div className={styles['reward-detail']}>
              <Image
                src="/images/bits.png"
                alt="Reward bits"
                height={300}
                width={202}
              />
              <p className={styles['reward-detail-description']}>
                Cada 100 bits equivale a un borde aletorio. Las donaciones deben
                hacerse en un solo envío. Puedes hacerla de 100, 200, 300, 400,
                500, ...bits.
              </p>
            </div>
            <div className={styles['reward-detail']}>
              <Image
                src="/images/sub.png"
                alt="Reward sub"
                height={93}
                width={250}
              />
              <p className={styles['reward-detail-description']}>
                Cada subscripción equivale un borde aletorio. Con las subs de
                regalo puedes elegir tener el borde aleatorio o darsela a la
                persona que recibió la sub.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}
