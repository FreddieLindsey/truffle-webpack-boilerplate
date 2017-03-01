import Web3 from 'web3'

let web3;
if (typeof window !== 'undefined' &&
    typeof window.web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  web3 = new Web3(window.web3.currentProvider)
} else {
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
}

export {
  web3
}
