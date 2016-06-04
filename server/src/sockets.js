import Socket from 'socket.io'

import initAppts from './appointments/socket'
import initCustomers from './customers/socket'

export default function startSocketServer() {
	const io = new Socket().attach(process.env.SOCKET_PORT)

	io.on('connection', (socket) => {
		initAppts(socket)
		initCustomers(socket)
	})	
}