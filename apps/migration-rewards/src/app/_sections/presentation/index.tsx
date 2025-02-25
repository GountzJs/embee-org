import { montserrat } from '@/consts/fonts';
import { DoubleImage } from '@/shared/components/double-image';
import styles from './presentation.module.css';

export function Presentation() {
  return (
    <section className={styles.container}>
      <div className={styles['logos-container']}>
        <DoubleImage
          urlFront="/logos/skt-t1.webp"
          urlBack="/images/skt-t1-worlds.avif"
          width={100}
          height={100}
        />
        <img
          src="/avatars/embee-worlds-2024.png"
          alt="Embeejayz worlds"
          loading="eager"
          height={150}
          width={86}
        />
        <DoubleImage
          urlFront="/logos/t1.webp"
          urlBack="/images/t1-worlds.avif"
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
        &quot;gracias&quot;. En esta web puedes encontrar coleccionables basados
        en la escena competitiva de <strong>League of Legends</strong> y en{' '}
        <strong>Embeejayz</strong>. ¡Esperamos que sigan acompañándonos en cada
        transmisión y que nuestra pasión continúe motivándolos!
      </p>
    </section>
  );
}
