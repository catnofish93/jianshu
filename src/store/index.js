import {createStore, combineReducers} from 'redux'
import reducer from './reducer'
import detailReducer from "./detailReducer";
import user from "./user";
const rootReducer = combineReducers({
    reducer,
    detailReducer,
    user
})
const store=createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;