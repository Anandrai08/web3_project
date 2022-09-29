require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/o8ZBVoqEUqOf4dN-mqKiPhTJ1xNWYtWq',
      accounts: ['7026a6ffb80d9d3351bcc738f23ddd32e818dea674be8501791a14284a72e3bd'],
    },
  },
};
//https://eth-goerli.g.alchemy.com/v2/o8ZBVoqEUqOf4dN-mqKiPhTJ1xNWYtWq