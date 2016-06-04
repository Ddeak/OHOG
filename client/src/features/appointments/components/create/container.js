import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import Create from './presenter'
import socket from '../../../socket'

const CreateAppointment = React.createClass({
	mixins: [PureRenderMixin],

	componentDidMount: function() {
		socket.emit('get customers')
	},

	render: function() {
		let customers = this.props.state.customers
		let filteredCustomers = customers.map(item => item.surname + ' ' + item.forename)
  			.filter((value, index, self) => self.indexOf(value) === index).toArray()

		return (
			<div>
				<Create customers={filteredCustomers} />
			</div>
		)
	}
})

function mapStateToProps(state) {
	return {
		state
	}
}

export default connect(
	mapStateToProps
)(CreateAppointment)