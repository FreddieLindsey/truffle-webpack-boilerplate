pragma solidity ^0.4.8;

contract SimpleStorage {
  uint public storedData;

  function SimpleStorage() {
    storedData = 10;
  }

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint retVal) {
    return storedData;
  }

}
