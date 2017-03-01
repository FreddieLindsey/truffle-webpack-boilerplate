import { contractArtifacts, initialise } from './contracts'
import { web3 } from './web3'

window.web3 = web3
window.contracts = initialise(contractArtifacts, web3)
