import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReduser";
import dialogsReducer from "./dialogsReducer";
import navbarReducer from "./navbarReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer
});

let store = createStore(reducers);


export default store;
