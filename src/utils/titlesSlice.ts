import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Ititle[] = [];

const titlesSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTitles: (_state, action: PayloadAction<Ititle[]>) => {
      return [...action.payload]
      // state.push(action.payload);
    },
    removeTitles: () => initialState,
  },
});

export const { addTitles, removeTitles } = titlesSlice.actions;
export default titlesSlice.reducer;
