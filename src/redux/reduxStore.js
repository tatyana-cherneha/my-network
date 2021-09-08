import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
});

let store = createStore(reducers);


export default store;
