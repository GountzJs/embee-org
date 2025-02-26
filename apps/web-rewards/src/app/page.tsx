import { MainPage } from '@/shared/components/main-page/main-page';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <MainPage className={styles['main-container']}>
      <img
        src="/chimney-energy.svg"
        alt="Alert mainteiner"
        width={400}
        height={400}
      />
      <h1 className={styles['title-page']}>La web está en mantenimiento</h1>
      <p className={styles['description-page']}>
        Estamos trabajando en la nueva versión de la web para mejorar su
        experiencia. Agradecemos su paciencia. 😊
      </p>
      <p className={styles['disclaimer']}>
        <strong>Aviso:</strong> Durante este periodo de mantenimiento, algunas
        funciones pueden estar inactivas. No nos hacemos responsables de
        posibles pérdidas de datos o errores derivados del acceso parcial a la
        web.
      </p>
    </MainPage>
  );
}
