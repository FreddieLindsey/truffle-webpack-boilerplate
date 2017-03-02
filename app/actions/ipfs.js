// Write file to IPFS
export const IPFS_WRITE_FILE_PENDING = 'IPFS_WRITE_FILE_PENDING'
export const IPFS_WRITE_FILE_SUCCESS = 'IPFS_WRITE_FILE_SUCCESS'
export const IPFS_WRITE_FILE_ERROR   = 'IPFS_WRITE_FILE_ERROR'

export const ipfsWriteFile = () => (dispatch) => {
  dispatch(ipfsWriteFilePending())
  
}

const ipfsWriteFilePending = () => {
  return {
    type: IPFS_WRITE_FILE_PENDING
  }
}

const ipfsWriteFileSuccess = (fileMetadata) => {
  return {
    type: IPFS_WRITE_FILE_SUCCESS,
    fileMetadata
  }
}

const ipfsWriteFileError = (error) => {
  return {
    type: IPFS_WRITE_FILE_ERROR,
    error
  }
}
