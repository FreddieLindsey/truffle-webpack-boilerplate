const ipfs = (ipfsState = {}, action) => {
  // Pre-checks
  let state = ipfsState
  if (!action.info && !checkIpfs(state)) {
    return {
      ...state,
      error: 'No IPFS found!'
    }
  } else if (!checkIpfs(state)) {
    state = getIpfs()
  }

  // Handler for actions
  switch (action.type) {

  }
}

const getIpfs = (state) => {
  return (typeof window.ipfs === 'object') ?
    { ...state, ipfs: window.ipfs } :
    state
}

const checkIpfs = (state) => {
  return !!state.ipfs
}

export default ipfs
