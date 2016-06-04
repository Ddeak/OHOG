import React from 'react'
import AutoComplete from 'material-ui/AutoComplete'

class Presenter extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return <div>
			<h3>New Appointment</h3>
			<AutoComplete
		      floatingLabelText="Customer"
		      filter={AutoComplete.caseInsensitiveFilter}
		      dataSource={this.props.customers}
		    />
		</div>
	}	
}

export default Presenter