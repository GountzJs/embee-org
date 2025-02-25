import { montserrat } from '@/consts/fonts';
import { staticUrl } from '@/core/client-settings';
import { DoubleImage } from '@/shared/components/double-image';
import styles from './presentation.module.css';

export function Presentation() {
  return (
    <section className={styles.container}>
      <div className={styles['logos-container']}>
        <DoubleImage
          urlFront={`${staticUrl}/logos/skt-t1.png`}
          urlBack={`/skt-t1-worlds.jpeg`}
          width={100}
          height={100}
        />
        <img
          src={`${staticUrl}/images/embee/embee-worlds-2024.png`}
          alt="Embeejayz worlds"
          height={150}
          width={86}
        />
        <DoubleImage
          urlFront={`${staticUrl}/logos/t1.png`}
          urlBack={`/t1-worlds.jpg`}
          width={100}
          height={100}
        />
      </div>
      <h1 className={`${styles['title-style']} ${montserrat.className}`}>
        ¡Bienvenido a nuestra comunidad!
      </h1>
      <p className={styles['description-style']}>
        Agradecemos cada pequeño apoyo al canal. Con esto en mente, creamos esta
        plataforma para que tu ayuda no se quede solo en una alerta y un
        "gracias". En esta web puedes encontrar coleccionables basados en la
        escena competitiva de <strong>League of Legends</strong> y en{' '}
        <strong>Embeejayz</strong>. ¡Esperamos que sigan acompañándonos en cada
        transmisión y que nuestra pasión continúe motivándolos!
      </p>
    </section>
  );
}
