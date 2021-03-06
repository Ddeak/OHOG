import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import Appointments from './presenter'

const Today = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {

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