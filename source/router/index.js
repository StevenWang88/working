import { HashRouter, Router, Route } from 'react-router-dom'
import React, { Component } from 'react'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
import createComponent from './bundle'
import Counter from 'bundle-loader?lazy&name=Counter!../components/dashboard'

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Router history={history} baseName="/">
                   <div className="root-box">
                      <Route path="/counte" component={createComponent(Counter)}></Route>
                   </div>
                </Router>
            </HashRouter>
        )
    }
}
