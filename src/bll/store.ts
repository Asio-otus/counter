import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {errorReducer} from "./errorReducer";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store