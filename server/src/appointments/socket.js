import { getAll } from './db'

export default function initAppointments(socket) {
	socket.on('get appts', () => {
		getAll((results) => {
			socket.emit('update appts', results)
		})
	})
}