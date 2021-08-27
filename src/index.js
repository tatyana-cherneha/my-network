import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogsData = [
    {id: 1, name: 'Kolya'},
    {id: 2, name: 'Lola'},
    {id: 3, name: 'Nikita'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Julia'}
]

let messageInput = [
    {id: 1, msgInput: 'input'},
    {id: 2, msgInput: 'input 2'},
    {id: 3, msgInput: 'input 3'}
]

let messageOutput = [
    {id: 1, msgOutput: 'input'},
    {id: 2, msgOutput: 'input 2'},
    {id: 3, msgOutput: 'input 3'}
]

let postData = [
    {id: 1, post: 'hi', likeCount: 6},
    {id: 2, post: 'my first post', likeCount: 4},
    {id: 3, post: 'okay', likeCount: 1}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messageInput={messageInput} messageOutput={messageOutput} postData={postData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
