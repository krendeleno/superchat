import React from "react";
import styles from "./Tag.module.css";

export function Tag({ tag }: { tag: string }) {

  return (
    <div className={styles['Tag']}>{tag}</div>
  );
}
