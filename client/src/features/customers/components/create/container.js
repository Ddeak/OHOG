import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'

import Create from './presenter'

const CreateCustomer = React.createClass({
	mixins: [PureRenderMixin],

	render: function() {

		return (
			<div>
				<Create />
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
)(CreateCustomer)