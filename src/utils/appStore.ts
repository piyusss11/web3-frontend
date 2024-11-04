import { configureStore } from "@reduxjs/toolkit";
import titlesSlice from "./titlesSlice";
const appStore = configureStore({
  reducer: {
    titles: titlesSlice,
  },
});

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
export default appStore;
