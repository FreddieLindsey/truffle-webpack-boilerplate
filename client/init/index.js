import { contractArtifacts, initialise } from './contracts'
import { web3 } from './web3'
// import { ipfs } from './storage'

window.web3 = web3
window.contracts = initialise(contractArtifacts, web3)
// window.ipfs = ipfs
window.ipfs = window.IpfsApi()

if (module.hot) {
  let { contractArtifacts } = require('./contracts')
  // let { ipfs } = require('./storage')

  window.contracts = initialise(contractArtifacts, web3)
  // window.ipfs = ipfs
  window.ipfs = window.IpfsApi()
}
