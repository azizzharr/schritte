import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import "./index.css";



ReactDOM.render(
  <div fallback={(<div>Loading</div>)} >
      <App />
 </div>
  , document.getElementById('root'));


