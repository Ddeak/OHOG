import { Appointments } from '../rethink'

export function getAll(next) {
	Appointments.orderBy({index: "time"})
	.run()
	.then(function(result) {
    	if (next) next(result)
	})
	.error(function(err) {
		console.log("An error occurred when getting from Appointment table: " + err)
	})
}