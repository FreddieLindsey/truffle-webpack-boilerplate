import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Web3 from 'web3'

import {
  simpleStorageAddressGet,
  simpleStorageValueGet,
  simpleStorageValueSet
} from '../../actions'

const mapStateToProps = (state) => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.SimpleStorage
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleAddressGet: () => simpleStorageAddressGet(dispatch),
    handleValueGet: () => simpleStorageValueGet(dispatch),
    handleValueSet: (v, a) => simpleStorageValueSet(dispatch, v, a)
  }
}

class App extends Component {

  static displayName = 'App'
  static propTypes = {
    accounts: PropTypes.shape({
      all: PropTypes.arrayOf(PropTypes.string),
      default: PropTypes.string
    }).isRequired,
    SimpleStorage: PropTypes.shape({
      address: PropTypes.string,
      value: PropTypes.any
    }).isRequired,

    handleAddressGet: PropTypes.func.isRequired,
    handleValueGet: PropTypes.func.isRequired,
    handleValueSet: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.handleAddressGet()
    this.props.handleValueGet()
  }

  handleValueSet () {
    let newValue = this.textInput.value
    if (!newValue || newValue === '') return
    this.props.handleValueSet(newValue, this.props.accounts.default)
  }

  render () {
    const {
      address,
      value
    } = this.props.SimpleStorage
    return (
      <div className="app" >
        <h1>Simple Storage</h1>

        { address ?
          <div>
            <h4>
              SimpleStorage deployed at { address }
            </h4>

            { value &&
              <div>
                <hr />
                <br />
                Current value: { value.toString() }
              </div>
            }

            { value ?
              <div>
                <input ref={(i) => { this.textInput = i }} />
                <button onClick={ () => { this.handleValueSet() }}>
                  Update Value
                </button>
              </div>
              :
              <button onClick={ () => { this.props.handleValueGet() }}>
                Get value of contract
              </button>
            }
          </div>
          :
          <button onClick={ () => this.props.handleAddressGet() }>
            Get address of contract
          </button>
        }

        <br />
        <hr />

        <span className="hint">
          <h4>Hint:</h4>
          Open the browser developer console to
          view <strong>redux state changes</strong>, errors and warnings.
        </span>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
