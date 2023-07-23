import React from "react";

import styles from "./Modal.module.scss";

interface IModalProps {
  children?: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
