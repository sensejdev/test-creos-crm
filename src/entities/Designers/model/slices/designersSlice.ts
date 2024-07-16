import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDesigner, IDesignerResponse } from "src/shared/types";
import axios from "axios";

export const fetchDesigners = createAsyncThunk(
  "designers/fetchDesigners",
  async () => {
    const response = await axios.get(
      "https://sandbox.creos.me/api/v1/designer/",
    );

    return response.data;
  },
);

const designersSlice = createSlice({
  name: "designers",
  initialState: {
    designers: [] as IDesigner[],
    count: 0,
    next: null as string | null,
    previous: null as string | null,
    loading: false,
  },
  reducers: {
    setDesigners: (state, action: PayloadAction<IDesignerResponse>) => {
      const { results, next, count, previous } = action.payload;

      state.designers = results;
      state.count = count;
      state.next = next;
      state.previous = previous;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDesigners.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchDesigners.fulfilled,
        (state, action: PayloadAction<IDesignerResponse>) => {
          state.designers = action.payload.results;
          state.count = action.payload.count;
          state.next = action.payload.next;
          state.previous = action.payload.previous;
          state.loading = false;
        },
      )
      .addCase(fetchDesigners.rejected, (state) => {
        state.loading = false;
      });
  },
});

export const { actions: designersActions } = designersSlice;
export const { reducer: designersReducer } = designersSlice;
