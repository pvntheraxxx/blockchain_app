
require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: '0.8.0',
  networks: {
    Goerli: {
      url: '*LINK OF GOERLI NETWORK*',
      accounts:['*YOUR PRIVATE KEY*']
    }
  }
}