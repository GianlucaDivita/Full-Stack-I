import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Comment from './Comment';
import Like from './Like';
import Timer from './Timer';
import Tweeter from './tweeter';

function Display() {
  return(
    <>
      <div><h1 class='title'>Tweet 1</h1><Comment/></div>
      <div><h1 class = 'title'>Tweet 2</h1><Comment/></div>
      <div><h1 class='title'>Tweet 3</h1><Comment/></div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Display/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
