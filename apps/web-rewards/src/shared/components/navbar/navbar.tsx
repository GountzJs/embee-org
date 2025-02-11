import { DetailedHTMLProps, HTMLAttributes } from "react";
import { Link, LinkProps } from "react-router";
import styles from "./navbar.module.css";

interface BoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: React.ReactNode;
}

export function Box({ children }: BoxProps) {
  return <nav className={styles.container}>{children}</nav>;
}

interface ItemProps extends LinkProps {
  children: React.ReactNode;
  selectable?: boolean;
}

export function Item({ children, selectable = false, ...props }: ItemProps) {
  return (
    <Link
      {...props}
      className={`${styles.item} ${selectable && styles["item-active"]} ${
        props.className || ""
      }`}
    >
      {children}
    </Link>
  );
}
