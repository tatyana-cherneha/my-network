import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/state";

let rerenderEnterTree = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEnterTree(state);

subscribe(rerenderEnterTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
