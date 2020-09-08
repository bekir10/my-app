import React from 'react';
import ReactDOM from 'react-dom';//little robot(can be different) that reacts with DOM
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( <React.StrictMode>,<App />, </React.StrictMode>,document.getElementById('root') //grabs element from html and insert ap into it 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
