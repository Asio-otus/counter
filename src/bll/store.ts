import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counterReducer";
import {errorReducer} from "./errorReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "./local-storage/localStorage";

export type RootStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
    counter: counterReducer,
    error: errorReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))

store.subscribe(() => {
    saveState(store.getState())
})

// @ts-ignore
window.store = store