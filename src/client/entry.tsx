import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'


import {Hello} from "./components/Hello";

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);

const App = () => {
  return <Hello compiler="React" framework="Typescript"></Hello>;
};

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById("root")
);