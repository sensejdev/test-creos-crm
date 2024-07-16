import { TasksChart } from "src/components/TasksChart";
import styles from "./Tasks.module.scss";
import clsx from "clsx";

export const Tasks = () => {
  return (
    <div className={clsx("container", styles.tasks)}>
      <TasksChart />
    </div>
  );
};
