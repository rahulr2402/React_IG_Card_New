import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <center>
     <Card imgPath="image/Lotus.jpg" userName="Lotus_Flower" name="Lotus" bio="I am a lotus" posts={10} followers = {100} following ={123}/>
     <Card imgPath="image/Rose.jpg" userName="Rose_Flower" name="Rose" bio="I am a Rose" posts={23} followers = {230} following ={100}/>
     <Card imgPath="image/Lily.jpg" userName="Lily_Flower" name="Lily" bio="I am a Lily" posts={32} followers = {130} following ={1030}/>
     </center>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))    
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
