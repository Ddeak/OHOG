import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { browserHistory, hashHistory, Router, Route } from 'react-router'

import { App } from './App.jsx'
import Components from './features/components'
import store from './store'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

const routes = <Router history={browserHistory}>
  	<Route path="/" component={App}>  
    	<Route path="appointments" component={Components.Appointments} />
    	<Route path="customers" component={Components.Customers} />
	</Route>
</Router>

  
ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>{routes}</Router>
    </Provider>, 
    document.getElementById('app'))