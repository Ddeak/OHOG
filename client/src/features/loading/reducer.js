function setState(newState) {
	return newState
}

export default function reducer(state = false, action) {
	switch (action.type) {
		case 'SET_LOADING_STATE':
			return setState(action.state)	
		default:
			return state
	}
}