import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { combineReducers } from 'redux-immutablejs'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import Header from '../components/header'
import Counter from '../components/dashboard'
import createReducer from '../reducers'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// import createComponent from '../utils/lazyload'
// import Counter from 'bundle-loader?lazy&name=Counter!../components/dashboard'


const mainReducer = combineReducers({
  todo: createReducer
})

const logger = createLogger({
  stateTransformer: (state) => {
    return state.toJS()
  }
})

const enhancer = process.env.NODE_ENV==='production'? applyMiddleware(thunk) : applyMiddleware(thunk, logger)
const store = createStore(mainReducer, enhancer)

class App extends Component {
  render() {
    return (
      <div>
       <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route path="/calcu" component={Counter} />
              <Redirect from="/" to="/calcu" />
            </Switch>
          </BrowserRouter>
       </Provider>
      </div>
    )
  }
}

export default App