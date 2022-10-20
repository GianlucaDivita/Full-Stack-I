import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './greeter';
import LikeButton from './LikeButton';

function Display() {
  return(
    <>
    <Greeter/>
    <LikeButton/>
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
