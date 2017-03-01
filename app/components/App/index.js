import React, { Component } from 'react'
import { connect } from 'react-redux'
import Web3 from 'web3'

import store from '../../store'

const mapStateToProps = (state) => {
  return {
    ...state.accounts,
    ...state.web3
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class App extends Component {

  static displayName = 'App'

  // refreshBalance () {
  //   var self = this
  //
  //   var meta
  //   MetaCoin.deployed().then(function (instance) {
  //     meta = instance
  //     return meta.getBalance.call(
  //       self.state.accounts.default,
  //       { from: self.state.accounts.default }
  //     )
  //   }).then(function (value) {
  //     self.setState({
  //       ...self.state,
  //       metacoin: {
  //         ...self.state.metacoin,
  //         balance: value
  //       }
  //     })
  //   }).catch(function (e) {
  //     console.log(e)
  //     self.setStatus('Error getting balance see log.')
  //   })
  // }

  // sendCoin () {
  //   var self = this
  //
  //   var amount = parseInt(document.getElementById('amount').value)
  //   var receiver = document.getElementById('receiver').value
  //
  //   this.setStatus('Initiating transaction... (please wait)')
  //
  //   var meta
  //   MetaCoin.deployed().then(function (instance) {
  //     meta = instance
  //     return meta.sendCoin(receiver, amount, {from: account})
  //   }).then(function () {
  //     self.setStatus('Transaction complete!')
  //     self.refreshBalance()
  //   }).catch(function (e) {
  //     console.log(e)
  //     self.setStatus('Error sending coin see log.')
  //   })
  // }

  render () {
    return (
      <div className="app" >
        <h1>MetaCoin</h1>
        <h2>Example Truffle Dapp</h2>
        {/* <h3>You have <span className="black">{ balance } META</span></h3> */}

        <br/>
        <h1>Send MetaCoin</h1>
        <br/><label htmlFor="amount">Amount:</label><input type="text" id="amount" placeholder="e.g., 95" />
        <br/><label htmlFor="receiver">To Address:</label><input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae" />
        {/* <br/><br/><button id="send" onClick={ () => this.sendCoin() }>Send MetaCoin</button> */}
        <br/><br />
        { status }
        <br />
        <span className="hint"><strong>Hint:</strong> open the browser developer console to view any errors and warnings.</span>
      </div>
    )
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App)
