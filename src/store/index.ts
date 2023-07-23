import { createStore, combineReducers } from "redux";
import { todoReducer } from "./reducers";

const rootReducer = combineReducers({
    todoReducer,
})
const store = createStore(rootReducer)

export default store