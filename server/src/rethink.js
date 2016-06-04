import thinky from 'thinky'
let type = thinky.type

const config = {
	rethinkdb: {
		host: process.env.RDB_HOST,
		port: process.env.RDB_PORT,
		authKey: process.env.RDB_AUTH_KEY,
		db: process.env.RDB_NAME
	}
}

const db = thinky(config.rethinkdb)


const customer = db.createModel("Customer", {
    id: type.string(),
    forename: type.string(),
    surname: type.string(),
    number: type.string(),
})

const appointment = db.createModel("Appointment", {
    id: type.string(),
    title: type.string(),
    time: type.date(),
    customerId: type.string()
})

const dog = db.createModel("Dog", {
    id: type.string(),
    name: type.string(),
    type: type.date(),
    customerId: type.string()
})

customer.hasMany(appointment, "appointment", "id", "customerId")
customer.hasMany(dog, "dog", "id", "customerId")
customer.ensureIndex('surname')


appointment.belongsTo(customer, "customer", "customerId", "id")
appointment.ensureIndex('time')

dog.belongsTo(customer, "customer", "customerId", "id")

export const Customers = customer
export const Appointments = appointment
export const Dogs = dog