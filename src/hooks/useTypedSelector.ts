import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/reducers";

// - Кастомный hook для полуения state из redux который работает с типами
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector