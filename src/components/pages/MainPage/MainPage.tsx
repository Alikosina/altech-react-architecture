import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBool } from "../../../assets/hooks/useBool";
import { TASKS } from "../../../constants/tasks";
import { Button } from "../../shared/Button";
import { Modal } from "../../shared/Modal";
import { TaskItem } from "./components/TaskItem";

import styles from "./MainPage.module.scss";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, openModal, closeModal] = useBool();
  const [tasks, setTasks] = useState(TASKS);
  const [currentDeleteId, setCurrentDeleteId] = useState<number | null>(null);

  const onDeleteClick = useCallback((id: number) => {
    setCurrentDeleteId(id);
    openModal();
  }, []);

  const onDeleteConfirm = useCallback(() => {
    const newTasks = tasks.filter((task) => task.id !== currentDeleteId);
    setTasks(newTasks);
    closeModal();
  }, [currentDeleteId]);

  const onCancel = useCallback(() => {
    closeModal();
    setCurrentDeleteId(null);
  }, []);

  const onNameClick = (id: number) => {
    navigate(`/task/${id}`);
  };

  return (
    <div className={styles.container}>
      <h2>Список Заданий:</h2>
      <div className={styles.list}>
        {tasks.map((item) => (
          <TaskItem
            onNameClick={onNameClick}
            onDelete={onDeleteClick}
            key={item.id}
            {...item}
          />
        ))}
      </div>
      {isOpen && (
        <Modal>
          <h2>Вы уверены что хотите удалить задание?</h2>
          <div>
            <Button onClick={onDeleteConfirm}>Удалить</Button>{" "}
            <Button onClick={onCancel}>Отмена</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
