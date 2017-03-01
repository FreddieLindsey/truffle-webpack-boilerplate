import { expect } from 'chai'

import { web3 } from '../../app/init/web3'

import {
  accountsInitPending,
  accountsInitSuccess
} from '../../app/actions/accounts'

describe('Actions: accounts', () => {
  it('should provide a blank account init pending', () => {
    const expected = {
      type: 'ACCOUNTS_INIT_PENDING'
    }
    expect(accountsInitPending()).to.deep.equal(expected)
  })

  it('should provide a filled init success', () => {
    const accounts = [{ random: 1 }]
    const expected = {
      type: 'ACCOUNTS_INIT_SUCCESS',
      accounts
    }
    expect(accountsInitSuccess(accounts)).to.deep.equal(expected)
  })
})
