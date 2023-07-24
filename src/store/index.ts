import { createStore, combineReducers } from "redux";
import {recipesReducer} from "./reducers"

const rootReducer = combineReducers({
    recipesReducer
})
const store = createStore(rootReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )

export default store