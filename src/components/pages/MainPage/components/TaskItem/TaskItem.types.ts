import { ITask } from "../../../../../types/ITask";

export interface ITaskItemProps extends ITask {
  onDelete: (id: number) => void;
  onNameClick: (id: number) => void;
}
