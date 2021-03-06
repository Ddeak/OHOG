import React from 'react'
import Today from './components/today/container'
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
        <Tab label="Today" >>
          <Today />
        </Tab>
        <Tab label="This Week" >

        </Tab>
        <Tab label="Create" >
          <Create />
        </Tab>
      </Tabs> 
    )
  }
}

export default Component