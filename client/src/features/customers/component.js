import React from 'react'
import Create from './components/create/container'
import {Tabs, Tab} from 'material-ui/Tabs'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
}

class Component extends React.Component {  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs>
        <Tab label="All" >
          <h2>All Customers:</h2>
        </Tab>
        <Tab label="Create" >
          <Create />
        </Tab>
      </Tabs> 
    )
  }
}

export default Component