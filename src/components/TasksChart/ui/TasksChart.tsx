import React from "react";
import { useSelector } from "react-redux";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { RootState } from "src/app/providers/StoreProvider/config/store.ts";
import { selectClosedTasksByWeek } from "src/entities/Designers/model/selectors/tasksSelectors.ts";
import { CustomXAxis } from "src/components/CustomXAxis/CustomXAxis.tsx";
import { CustomYAxis } from "src/components/CustomYAxis/CustomYAxis.tsx";
import { taskStatusesSelector } from "src/entities/Designers/model/selectors/taskStatusesSelector.ts";
import styles from "./TasksCharts.module.scss";
import { useTranslation } from "react-i18next";

export const TasksChart: React.FC = () => {
  const data = useSelector((state: RootState) =>
    selectClosedTasksByWeek(state),
  );
  const tasksStatuses = useSelector((state: RootState) => {
    return taskStatusesSelector(state);
  });
  const { t } = useTranslation();

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className={styles.charts}>
      <h2>{t("Закрытые задачи за месяц по неделям")}</h2>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <CustomXAxis />
        <CustomYAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="profit" fill="#82ca9d" />
        <Bar dataKey="expense" fill="#8884d8" />
        <Bar dataKey="difference" fill="#ffc658" />
      </BarChart>

      <h2>{t("Процентное соотношение статусов задач")}</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={tasksStatuses}
          cx={200}
          cy={200}
          labelLine={false}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};
