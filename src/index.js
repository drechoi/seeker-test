import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history }  from './store';

import Auth from './Auth/Auth';

const auth = new Auth();
const tmp = [];
ReactDOM.render(
    <Provider store={configureStore()}>
        <ConnectedRouter history={history}>
            <App auth={auth}/>
        </ConnectedRouter>
    </Provider>
    
    , document.getElementById('root')

);
registerServiceWorker();
