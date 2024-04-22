import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { asientoReducer } from "../reducer";


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const rootReducer = combineReducers({
    asientos: asientoReducer,

});

const store = createStore(
    rootReducer,
    composedEnhancer
);

export default store;