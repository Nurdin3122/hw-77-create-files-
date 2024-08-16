import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from "../components/UI/Form/FormMessageSlice.ts";

export const store = configureStore({
    reducer: {
        messages:productsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;