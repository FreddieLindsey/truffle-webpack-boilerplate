const ipfs = (ipfsState = {}, action) => {
  // Pre-checks
  let state = ipfsState
  if (!action.info || !state.instance) {
    state = getIpfs(state)
  }
  if (!state.instance) return state

  // Handler for actions
  switch (action.type) {

  }
  return state
}

const getIpfs = (state) => {
  return (typeof window.ipfs === 'object') ?
    { ...state, instance: window.ipfs } :
    { ...state, error: 'No IPFS found!' }
}

export default ipfs
