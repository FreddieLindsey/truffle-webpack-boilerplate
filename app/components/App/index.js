import React, { Component } from 'react'
import { connect } from 'react-redux'
import Web3 from 'web3'

const mapStateToProps = (state) => {
  return {
    ...state.accounts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class App extends Component {

  static displayName = 'App'

  constructor (props) {
    super(props)
    this.state = {
      contracts: {
        SimpleStorage: {
          address: undefined
        }
      }
    }
  }

  componentDidMount () {
    const self = this
    window.contracts.SimpleStorage.deployed().then((instance) => {
      let state = self.state
      state.contracts.SimpleStorage.address = instance.address
      self.setState(state)
    })
  }

  render () {
    const address = this.state.contracts.SimpleStorage.address
    return (
      <div className="app" >
        <h1>Simple Storage</h1>
        <h2>Example application running on Ethereum</h2>

        { address &&
          <div>
            SimpleStorage deployed at { address }
          </div>
        }
        
        <br />
        <span className="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
