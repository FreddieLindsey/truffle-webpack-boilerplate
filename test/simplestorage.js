const SimpleStorage = artifacts.require('./SimpleStorage.sol')

contract('SimpleStorage', (accounts) => {

  it("should put 10 as the default value", () => {
    return SimpleStorage.deployed()
    .then((instance) => {
      return instance.get.call()
    })
    .then((storedData) => {
      assert.equal(storedData.valueOf(), 10, "10 wasn't stored by default")
    })
  })

})
