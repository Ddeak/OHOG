import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import * as actions from '../../../actions'
import socket from '../../../socket'

import Appointments from './presenter'

const Today = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {
		let groups = this.props.state.groups

		return (
			<div>
				<Appointments />
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
)(Today)