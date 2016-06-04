import { setApptsState, setLoadingState } from '../actions'

export default function init(socket, store) {
	socket.on('update appts', (results) => {
		store.dispatch(setApptsState(results))
		store.dispatch(setLoadingState(false))
	})
}

