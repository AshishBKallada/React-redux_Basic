import { createStore } from "redux";
import { reducer } from "./Counter/CounterReducer";

export const store = createStore(reducer);
