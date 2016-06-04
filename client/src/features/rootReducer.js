import { combineReducers } from 'redux'

import appointments from './appointments/reducer'
import loading from './loading/reducer'

let root_reducer = combineReducers({
	appointments,
	loading
})

export default root_reducer