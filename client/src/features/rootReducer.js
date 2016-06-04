import { combineReducers } from 'redux'

import appointments from './appointments/reducer'
import loading from './loading/reducer'
import customers from './customers/reducer'

let root_reducer = combineReducers({
	appointments,
	loading,
	customers
})

export default root_reducer