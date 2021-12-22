require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: process.env.alchemey_staging_key,
      accounts: [process.env.private_key],
    },
  },
};
