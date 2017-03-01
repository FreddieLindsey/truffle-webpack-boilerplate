// Accounts initialise
export const ACCOUNTS_INIT_PENDING = 'ACCOUNTS_INIT_PENDING'
export const ACCOUNTS_INIT_SUCCESS = 'ACCOUNTS_INIT_SUCCESS'
export const ACCOUNTS_INIT_ERROR   = 'ACCOUNTS_INIT_ERROR'

export const accountsInit = () => (dispatch) => {
  dispatch(accountsInitPending())
  if (window.web3) {
    const web3 = window.web3
    web3.eth.getAccounts((err, accs) => {
      if (err != null) {
        dispatch(accountsInitError(err))
      } else if (accs.length == 0) {
        dispatch(accountsInitError('No accounts found!'))
      } else {
        dispatch(accountsInitSuccess(accs))
      }
    })
  } else {
    dispatch(accountsInitError('No web3 object!'))
  }
}

export const accountsInitPending = () => {
  return {
    type: ACCOUNTS_INIT_PENDING
  }
}

export const accountsInitSuccess = (accounts) => {
  return {
    type: ACCOUNTS_INIT_SUCCESS,
    accounts
  }
}

export const accountsInitError = (error) => {
  return {
    type: ACCOUNTS_INIT_ERROR,
    error
  }
}
