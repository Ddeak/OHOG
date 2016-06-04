import io from 'socket.io-client'
import store from '../store'

import appointmentSocket from './appointments/socket'

const socket = io(`${location.protocol}//${location.hostname}:${SOCKET_PORT}`)

appointmentSocket(socket, store)

export default socket