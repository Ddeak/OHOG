import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory, Router, Route } from 'react-router'

import { App } from './App.jsx'
import Components from './features/components'
console.log("compo", Components.Appointments)

import store from './store'

const routes = <Router history={browserHistory}>
  <Route path="/" component={App}>  
    <Route path="appointments" component={Components.Appointments} />
	</Route>
</Router>

  
ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>, 
    document.getElementById('app'))