import { getAll } from './db'

export default function initCustomers(socket) {
	socket.on('get customers', () => {
		getAll((results) => {
			socket.emit('update customers', results)
		})
	})
}