import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart-slice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

// store.getStateの型は() => ステートの型なので、TSのReturnTypeで戻り値の型をとる
// RootStateはstoreのステートの型となり、useSelectorで型を取得できるようになる
export type RootState = ReturnType<typeof store.getState>;
// hooks.tsでuseDispatchの型を() => AppDispatchに指定する
// useDispatch()した際にstore.dispatchの型を取得できるようになる
export type AppDispatch = typeof store.dispatch;
