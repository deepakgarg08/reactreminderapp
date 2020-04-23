import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Main from './pages/main';
// ReactDOM.render(<Main />, document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
