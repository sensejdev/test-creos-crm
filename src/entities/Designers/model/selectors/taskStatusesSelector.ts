import { IDesigner } from "src/shared/types";
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/providers/StoreProvider/config/store.ts";

const selectDesigners = (state: RootState) => state.designers.designers;

export const taskStatusesSelector = createSelector(
  [selectDesigners],
  (designers: IDesigner[]) => {
    const allTasks = designers.flatMap((designer) => designer.issues);
    const statusCount: Record<string, number> = {};

    allTasks.forEach((task) => {
      statusCount[task.status] = (statusCount[task.status] || 0) + 1;
    });

    const totalTasks = allTasks.length;

    const statusData = Object.keys(statusCount).map((status) => ({
      name: status,
      value: (statusCount[status] / totalTasks) * 100,
    }));

    return statusData;
  },
);
