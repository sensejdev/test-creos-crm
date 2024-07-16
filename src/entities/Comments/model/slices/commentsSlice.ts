import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "src/shared/types";

const commentsSlice = createSlice({
  name: "comments",
  initialState: [] as IComment[],
  reducers: {
    setComments: (_, action: PayloadAction<IComment[]>) => action.payload,
  },
});

export const { actions: commentsActions } = commentsSlice;
export const { reducer: commentsReducer } = commentsSlice;
