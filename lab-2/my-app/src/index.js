import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Greeter from './greeter';
import LikeButton from './LikeButton';
import Student from './components/student';
import College from './components/college';
import Course from './components/courses';


function Display() {
  return(
    <>
    <Student name="Rick Rude" number="11111"/> <Course enrolled ="2" />
    <Student name="Shawn Michaels" number="22222" /> <Course enrolled ="1" />
    <Student name="Bret Hart" number="33333" /> <Course enrolled ="3" />
    <College name="George Brown" location ="Casa Loma" />
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
