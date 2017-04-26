import contract from 'truffle-contract'

import SimpleStorage from '../../contracts/SimpleStorage.sol'

export const contractArtifacts = {
  SimpleStorage
}

export const initialise = (contractArtifacts, web3) => {
  let contracts = {};
  for (const k in contractArtifacts) {
    const contract_ = contract(contractArtifacts[k])
    contract_.setProvider(web3.currentProvider)
    contracts[k] = contract_
  }
  return contracts
}
