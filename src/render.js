import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, addMsg} from "./redux/state";

export let rerenderEnterTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMsg={addMsg} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

