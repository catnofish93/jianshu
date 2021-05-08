import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
import detailReducer from "./detailReducer";
import user from "./user";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import createSagaMiddleware from 'redux-saga'
import { helloSago } from './sagas';
const rootReducer = combineReducers({
    reducer,
    detailReducer,
    user
})
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
export default () => {
    let store = createStore(persistedReducer, compose(applyMiddleware(createSagaMiddleware(helloSago)),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
    let persistor = persistStore(store)
    const sagaMiddleware = createSagaMiddleware(helloSago)
    return { store, persistor }
};
