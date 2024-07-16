import { RootState } from "src/app/providers/StoreProvider/config/store.ts";
import { createSelector } from "@reduxjs/toolkit";
import { eachWeekOfInterval, endOfWeek, startOfWeek, subWeeks } from "date-fns";
import { IDesigner } from "src/shared/types";

const selectDesigners = (state: RootState) => state.designers.designers;

export const selectClosedTasksByWeek = createSelector(
  [selectDesigners],
  (designers: IDesigner[]) => {
    const closedTasks = designers.flatMap((designer) =>
      designer.issues.filter((issue) => issue.status === "Done"),
    );

    const endDate = new Date();
    const startDate = subWeeks(endDate, 8);
    const weeks = eachWeekOfInterval({ start: startDate, end: endDate }).map(
      (week, index) => ({
        start: startOfWeek(new Date(week)),
        end: endOfWeek(new Date(week)),
        week: index + 1,
      }),
    );

    const tasksByWeek = weeks.map((week) => {
      const weekTasks = closedTasks.filter(
        (task) =>
          new Date(task.date_created) >= week.start &&
          new Date(task.date_created) <= week.end,
      );

      const profit = weekTasks.length * 100; // Пример: $100 за каждую закрытую задачу
      const expense = weekTasks.length * 50; // Пример: $50 за каждую закрытую задачу

      return {
        week: week.week,
        profit,
        expense,
        difference: profit - expense,
      };
    });

    return tasksByWeek;
  },
);
