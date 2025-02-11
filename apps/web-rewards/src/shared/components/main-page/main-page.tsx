import { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./main-page.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}

export function MainPage({ children, ...props }: Props) {
  return (
    <main {...props} className={`${styles.container} ${props.className || ""}`}>
      {children}
    </main>
  );
}
