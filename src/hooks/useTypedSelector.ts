import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../ducks/reducer";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;