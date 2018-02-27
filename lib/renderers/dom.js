
import ReactDOM from 'react-dom';
import React from 'react';
import App from '../components/App';
import StateApi from '../stateApi';

const store = new StateApi(window.initialData);

ReactDOM.hydrate(<App store={store} />, document.getElementById('root'));