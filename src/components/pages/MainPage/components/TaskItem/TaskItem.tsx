import React from "react";
import { ITask } from "../../../../../types/ITask";
import { Button } from "../../../../shared/Button";

import styles from "./TaskItem.module.scss";

interface ITaskItemProps extends ITask {
  onDelete: (id: number) => void;
}

export const TaskItem: React.FC<ITaskItemProps> = ({
  id,
  name,
  difficulty,
  onDelete,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.name}>Название: {name}</span>
        <span className={styles.difficulty}>Сложность: {difficulty}</span>
      </div>
      <div>
        <Button onClick={() => onDelete(id)}>Удалить</Button>
      </div>
    </div>
  );
};
