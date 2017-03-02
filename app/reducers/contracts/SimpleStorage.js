import {
  // SIMPLESTORAGE_ADDRESS_GET_PENDING,
  SIMPLESTORAGE_ADDRESS_GET_SUCCESS,
  SIMPLESTORAGE_ADDRESS_GET_ERROR,
  // SIMPLESTORAGE_VALUE_GET_PENDING,
  SIMPLESTORAGE_VALUE_GET_SUCCESS,
  SIMPLESTORAGE_VALUE_GET_ERROR,
  // SIMPLESTORAGE_VALUE_SET_PENDING,
  SIMPLESTORAGE_VALUE_SET_SUCCESS,
  SIMPLESTORAGE_VALUE_SET_ERROR
} from '../../actions'

const SimpleStorage = (state = {}, action) => {
  switch (action.type) {
    case SIMPLESTORAGE_ADDRESS_GET_SUCCESS:
      return handleAddressGetSuccess(state, action.address)
    case SIMPLESTORAGE_ADDRESS_GET_ERROR:
      return handleAddressGetError(state, action.error)
    case SIMPLESTORAGE_VALUE_GET_SUCCESS:
      return handleValueGetSuccess(state, action.value)
    case SIMPLESTORAGE_VALUE_GET_ERROR:
      return handleValueGetError(state, action.error)
    case SIMPLESTORAGE_VALUE_SET_SUCCESS:
      return handleValueSetSuccess(state, action.value)
    case SIMPLESTORAGE_VALUE_SET_ERROR:
      return handleValueSetError(state, action.error)
  }
  return state
}

const handleAddressGetSuccess = (state, address) => {
  return {
    ...state,
    error: undefined,
    address
  }
}

const handleAddressGetError   = (state, error) => {
  return {
    ...state,
    error
  }
}

const handleValueGetSuccess = (state, value) => {
  return {
    ...state,
    error: undefined,
    value
  }
}

const handleValueGetError   = (state, error) => {
  return {
    ...state,
    error
  }
}

const handleValueSetSuccess = (state, value) => {
  return {
    ...state,
    error: undefined,
    value
  }
}

const handleValueSetError   = (state, error) => {
  return {
    ...state,
    error
  }
}

export default SimpleStorage
