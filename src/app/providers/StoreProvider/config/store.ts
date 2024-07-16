import { configureStore } from "@reduxjs/toolkit";
import { commentsReducer } from "src/entities/Comments/model/slices/commentsSlice.ts";
import { designersReducer } from "src/entities/Designers/model/slices/designersSlice.ts";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    designers: designersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
