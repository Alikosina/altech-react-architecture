import React from "react";
import { ITask } from "../../../../../types/ITask";
import { Button } from "../../../../shared/Button";

import styles from "./TaskItem.module.scss";
import { ITaskItemProps } from "./TaskItem.types";

export const TaskItem: React.FC<ITaskItemProps> = ({
  id,
  name,
  difficulty,
  onDelete,
  onNameClick,
}) => {
  return (
    <div className={styles.container}>
      <div>
        <span onClick={() => onNameClick(id)} className={styles.name}>
          Название: {name}
        </span>
        <span className={styles.difficulty}>Сложность: {difficulty}</span>
      </div>
      <div>
        <Button onClick={() => onDelete(id)}>Удалить</Button>
      </div>
    </div>
  );
};
