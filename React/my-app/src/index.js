import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* const user = {
    name : "obada",
    age: 30,
    active: true
  } */
const title = "this is user information"
const users = [
  {
    name : "Ahmed",
    age: 40,
    active: true
  },
  {
    name : "Mohamed",
    age: 25,
    active: false
  },
  {
    name : "Ibrahim",
    age: 33,
    active: true
  }
]

ReactDOM.render(
  <React.StrictMode>
    <App users={users} title={title} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
