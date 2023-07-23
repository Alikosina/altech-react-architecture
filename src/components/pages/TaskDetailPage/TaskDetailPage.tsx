import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { TASKS } from "../../../constants/tasks";

import styles from "./TaskDetailPage.module.scss";

export const TaskDetailPage: React.FC = () => {
  const { id } = useParams<{
    id: string;
  }>();

  const currentTask = useMemo(
    () => TASKS.find((task) => task.id === Number(id)),
    [id]
  );

  return (
    <div className={styles.container}>
      <h1>Информация о задании {currentTask?.name}</h1>
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <span className={styles.label}>Название:</span>
          <span className={styles.value}>{currentTask?.name}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>ID:</span>
          <span className={styles.value}>{currentTask?.id}</span>
        </div>
        <div className={styles.infoRow}>
          <span className={styles.label}>Сложность:</span>
          <span className={styles.value}>{currentTask?.difficulty}</span>
        </div>
      </div>
    </div>
  );
};
