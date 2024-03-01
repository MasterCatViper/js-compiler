import { configureStore } from "@reduxjs/toolkit";
import complierSlice from "./slices/compilerSlice";

export const store = configureStore({
  reducer: {
    complierSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
