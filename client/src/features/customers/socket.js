import { setCustomerState } from '../actions'

export default function init(socket, store) {
	socket.on('update customers', (results) => {
		store.dispatch(setCustomerState(results))
	})
}

