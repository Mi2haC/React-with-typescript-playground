import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

// (useCartDispatch = useDispatch)()した際の戻り値がAppDispatchとなる
type DispatchFunction = () => AppDispatch;
export const useCartDispatch: DispatchFunction = useDispatch;
// TypedUseSelectorHookで型付けされたuseSelectorを使用できる
// 型にstoreのステートを指定することで、useSelector使用時に型を取得できる
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector;
