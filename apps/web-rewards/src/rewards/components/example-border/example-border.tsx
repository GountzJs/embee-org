import { BorderImage } from "@/rewards/components/border-image";
import { ProplayerCover } from "@/rewards/components/proplayer-cover/proplayer-cover";
import { Rank } from "@/rewards/models/enums/rank.enum";
import styles from "./example-border.module.css";

export function ExampleBorder() {
  return (
    <div className={styles.container}>
      <div className={styles["proplayer-container"]}>
        <ProplayerCover name="faker" width={280} height={445} />
      </div>
      <div className={styles["border-container"]}>
        <BorderImage rank={Rank.Challenger} />;
      </div>
    </div>
  );
}
