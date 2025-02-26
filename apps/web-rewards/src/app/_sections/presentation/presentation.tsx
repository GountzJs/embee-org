import { CardEmbee } from '@/shared/components/card-embee/card-embee';
import { Typography } from '@embeeorg/ui-kit';
import styles from './/presentation.module.css';

export function Presentation() {
  return (
    <section className={styles['card-presentation']}>
      <CardEmbee>
        <Typography
          variant="h1"
          family="primary"
          color="primary"
          size="3xl"
          weight="extrabold"
        >
          Recompensa coleccionable
        </Typography>
        <Typography
          variant="p"
          family="secondary"
          color="primary"
          size="lg"
          weight="regular"
        >
          Agradecemos cada pequeño apoyo a este proyecto, por lo que decidimos
          crear coleccionables basados en el competitivo de{' '}
          <strong>
            <i>League of Legends</i>
          </strong>{' '}
          y en el canal de{' '}
          <strong>
            <i>Embeejayz</i>
          </strong>{' '}
          para ustedes. ¡Esperamos que sean de su agrado y que continúen
          acompañándonos en las partidas de T1!
        </Typography>
      </CardEmbee>
      <p className={styles.disclaimer}>
        <strong className={styles['title-disclaimer']}>
          Aviso Importante:
        </strong>{' '}
        <br /> Los bordes obtenidos en esta plataforma son recompensas
        coleccionables y no tienen valor monetario real. No pueden ser
        comprados, vendidos, intercambiados ni canjeados por dinero, bienes o
        servicios, ni dentro de esta aplicación ni fuera de ella. Esta
        plataforma no está afiliada, respaldada ni operada por Riot Games.
        League of Legends y todos sus activos son propiedad de Riot games, Inc.
      </p>
    </section>
  );
}
