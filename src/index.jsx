import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import transformInitialDataToState from './transformers/initialData/toGlobalState';
import Home from './components/Home';
import reducers from './reducers';


const middleware = [
    thunk
];

const PAGE_STATE = { foo: null };

const store = createStore(
    reducers,
    transformInitialDataToState(PAGE_STATE),
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : (f) => f
    )
);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.querySelector('.container')
);
