import { Customers } from '../rethink'

export function getAll(next) {
	Customers.orderBy({index: "surname"})
	.run()
	.then(function(result) {
    	if (next) next(result)
	})
	.error(function(err) {
		console.log("An error occurred when getting from Customer table: " + err)
	})
}