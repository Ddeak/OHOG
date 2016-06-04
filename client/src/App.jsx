import React from 'react'
import { render } from 'react-dom'

export const App = React.createClass({
    render() {
        return (
            <div>
				<h1>Hello Word</h1>
                    
                {this.props.children}
            </div>			
        )
    }
})




 	
