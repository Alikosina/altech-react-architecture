import React from "react";

import styles from "./Modal.module.scss";
import { IModalProps } from "./Modal.types";

export const Modal: React.FC<IModalProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
