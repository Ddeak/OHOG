import React from 'react'
import Today from './components/today/container'

class Component extends React.Component {  
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Appointments Container</h1>
        <Today />
      </div>
    )
  }
}

export default Component