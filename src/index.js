import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Docs from './docs/Docs';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/highlight.js/styles/ocean.css'

document.addEventListener("DOMContentLoaded", function(event) { 
    ReactDOM.render(<Docs />, document.getElementById('root'));
});

