import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";

let rerenderEnterTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
                 store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEnterTree(store.getState());


store.subscribe(() => {
    let state = store.getState()
    rerenderEnterTree(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
