require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {

  solidity: "0.8.20",

  networks: {

    baseSepolia: {
      url: process.env.BASE_RPC_URL,
      accounts: [process.env.PRIVATE_KEY]
    },

    base: {
      url: process.env.BASE_MAINNET_RPC,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
