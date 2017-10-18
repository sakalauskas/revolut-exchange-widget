import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules'
import {updateRates} from "./modules/currency";

const initialState = {}
const enhancers = []
const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers
)


store.dispatch(updateRates());
setInterval(() => {
    store.dispatch(updateRates());
    console.log(store.getState());
}, 3 * 1000) // refresh every 10 secs

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
