import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App';
import reducers from './Reducers'

const store = createStore(reducers)

ReactDOM.render(
  // the store can be accessed by any component
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
