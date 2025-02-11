import { ExampleBorder } from "@/rewards/components/example-border/example-border";
import { CardEmbee } from "@/shared/components/card-embee/card-embee";
import { MainPage } from "@/shared/components/main-page/main-page";
import { Typography } from "@embeeorg/ui-kit";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <MainPage className={styles["main-container"]}>
      <section className={styles["card-presentation"]}>
        <CardEmbee>
          <Typography
            variant="h1"
            family="primary"
            color="primary"
            size="3xl"
            weight="extrabold"
          >
            Recompensas coleccionables
          </Typography>
          <Typography
            variant="p"
            family="secondary"
            color="primary"
            size="lg"
            weight="regular"
          >
            Agradecemos cada pequeño apoyo a este proyecto, por lo que decidimos
            crear coleccionables basados en el competitivo de{" "}
            <strong>
              <i>League of Legends</i>
            </strong>{" "}
            y en el canal de{" "}
            <strong>
              <i>Embeejayz</i>
            </strong>{" "}
            para ustedes. ¡Esperamos que sean de su agrado y que continúen
            acompañándonos en las partidas de T1!
          </Typography>
        </CardEmbee>
      </section>
      <Typography
        variant="h2"
        family="primary"
        color="white"
        size="4xl"
        weight="extrabold"
      >
        Detalles de las recompensas
      </Typography>
      <section className={styles["section-container"]}>
        <Typography
          variant="h3"
          family="primary"
          color="primary-light"
          size="4xl"
          weight="extrabold"
        >
          Bordes
        </Typography>
        <ExampleBorder />
      </section>
    </MainPage>
  );
}
