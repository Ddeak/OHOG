import React from 'react'
import { render } from 'react-dom'

import {cyan500} from 'material-ui/styles/colors'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

export const App = React.createClass({
    render() {
        return (
        	<MuiThemeProvider muiTheme={muiTheme}>
        		<div>
        			<AppBar title="Odin's Hall of Grooming"
        					showMenuIconButton={false} 
        					iconElementRight={
        						<IconMenu
						      		iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
						      		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
						      		targetOrigin={{horizontal: 'right', vertical: 'top'}}
					    		>
                    <MenuItem linkButton={true} href="#/appointments" primaryText="Appointments" />
                    <MenuItem linkButton={true} href="#/customers" primaryText="Customers" />
					      		<MenuItem primaryText="Dogs" disabled={true} />
					      		<MenuItem primaryText="Help" disabled={true} />
					      		<MenuItem primaryText="Sign out" disabled={true} />
						    	</IconMenu>
						}/>
	    			{this.props.children}
    			</div>
  			</MuiThemeProvider>			
        )
    }
})




 	
