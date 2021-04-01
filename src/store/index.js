import {createStore, combineReducers} from 'redux'
import reducer from './reducer'
import detailReducer from "./detailReducer";
const rootReducer = combineReducers({
    reducer,
    detailReducer
})
const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;