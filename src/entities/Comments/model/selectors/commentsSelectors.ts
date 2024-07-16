import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "src/app/providers/StoreProvider/config/store.ts";

export const selectComments = (state: RootState) => state.comments;

export const selectLatestComments = createSelector(
  [selectComments],
  (comments) => comments.slice(-10).reverse(),
);
