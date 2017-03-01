import { expect } from 'chai'

import {
  accountsInitPending
} from '../../app/actions/accounts'

describe('Actions: accounts', () => {
  it('should provide a blank account init pending', () => {
    const expected = {
      type: 'ACCOUNTS_INIT_PENDING'
    }
    expect(accountsInitPending()).to.deep.equal(expected)
  })
})
