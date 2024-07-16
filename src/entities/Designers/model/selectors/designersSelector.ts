import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/providers/StoreProvider/config/store.ts";

const calculateMedian = (numbers: number[]): number => {
  const sorted = [...numbers].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0
    ? sorted[mid]
    : sorted[mid - 1] + sorted[mid] / 2;
};

export const selectDesigners = (state: RootState) => state.designers.designers;

export const selectTopDesigners = createSelector(
  [selectDesigners],
  (designers) => {
    return designers
      .map((designer) => {
        const completedTasks = designer.issues.filter(
          (issue) => issue.status === "Done",
        ).length;
        const times = designer.issues.map((issue) =>
          new Date(issue.date_created).getTime(),
        );
        const medianTime = calculateMedian(times);

        return {
          ...designer,
          medianTime,
          completedTasks,
        };
      })
      .sort(
        (a, b) =>
          a.medianTime - b.medianTime || b.completedTasks - a.completedTasks,
      )
      .slice(0, 10);
  },
);
