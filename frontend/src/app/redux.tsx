import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, Provider, useDispatch, useSelector } from 'react-redux';
 import globalReducer from '@/state';
import { api } from "@/state/api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useRef } from "react";

// Reducers combinados
const rootReducer = combineReducers({
    global: globalReducer,
    [api.reducerPath]: api.reducer,
});

// Tienda Redux o Store
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Provider
export default function StoreProvider({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore>();
    if (!storeRef.current) {
        storeRef.current = makeStore();
        setupListeners(storeRef.current.dispatch);
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    );
}
