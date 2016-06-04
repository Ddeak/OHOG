import { List } from 'immutable'

function setState(newState) {
	return List(newState)
}

export default function reducer(state = List(), action) {
	switch (action.type) {
		case 'SET_CUSTOMER_STATE':
			return setState(action.state)	
		default:
			return state
	}
}