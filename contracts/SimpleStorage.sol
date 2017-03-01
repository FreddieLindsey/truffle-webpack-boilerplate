pragma solidity ^0.4.8;

contract SimpleStorage {
  uint public storedData;

  function SimpleStorage(/* uint initialValue */) {
    /*storedData = initialValue;*/
    storedData = 20;
  }

  function set(uint x) {
    storedData = x;
  }

  function get() constant returns (uint retVal) {
    return storedData;
  }

}
