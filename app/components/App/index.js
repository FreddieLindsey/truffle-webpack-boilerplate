import React, { Component, PropTypes } from 'react'
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
  static propTypes = {
    accounts: PropTypes.shape({
      default: PropTypes.string.isRequired
    })
  }

  constructor (props) {
    super(props)
    this.state = {
      contracts: {
        SimpleStorage: {
          address: undefined,
          value: undefined
        }
      }
    }
  }

  handleGetAddress() {
    const self = this
    window.contracts.SimpleStorage.deployed().then((instance) => {
      let state = self.state
      state.contracts.SimpleStorage.address = instance.address
      self.setState(state)
    })
  }

  handleGetValue() {
    const self = this
    window.contracts.SimpleStorage.deployed().then((instance) => {
      return instance.get()
    }).then((v) => {
      let state = self.state
      state.contracts.SimpleStorage.value = v
      self.setState(state)
    })
  }

  handleUpdateValue() {
    const newValue = this.textInput.value
    const self = this
    let instance_;
    window.contracts.SimpleStorage.deployed().then((instance) => {
      return instance.set(
        newValue,
        { from: this.props.accounts.default }
      )
    }).then((v) => {
      console.dir(v)
      let state = self.state
      state.contracts.SimpleStorage.value = newValue
      self.textInput.value = ''
      self.setState(state)
    }).catch((err) => {
      console.dir(err)
    })
  }

  render () {
    const {
      address,
      value
    } = this.state.contracts.SimpleStorage
    return (
      <div className="app" >
        <h1>Simple Storage</h1>
        <h2>Example basic storage application running on Ethereum</h2>

        { !address &&
          <button onClick={ () => { this.handleGetAddress() } }>
            Get address of contract
          </button>
        }

        { address &&
          <div>
            <h3>
              SimpleStorage deployed at { address }
            </h3>
            { !value &&
              <button onClick={ () => { this.handleGetValue() }}>
                Get value of contract
              </button>
            }
          </div>
        }

        { value &&
          <div>
            Current value: { value.toString() }
          </div>
        }

        { address && value &&
          <div>
            <input ref={(i) => { this.textInput = i }} />
            <button onClick={() => { this.handleUpdateValue() }}>
              Update Value
            </button>
          </div>
        }

        <br />
        <span className="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
