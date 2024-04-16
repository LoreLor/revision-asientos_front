import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { asientoReducer } from '../reducer';


const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(
    asientoReducer,
    composedEnhancer
);

export default store;