import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import videosReducer from "./videos-reducer";


let reducers = combineReducers({
    videosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));

window.__store__ = store;

export default store;