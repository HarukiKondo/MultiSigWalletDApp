/**
 * Truffle用の設定ファイル
 */
 
const path = require("path");
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');
// const HDWalletProvider2 = require("@truffle/hdwallet-provider");
// .envファイルから読み込み
const {
  MNEMONIC, 
  ALCHEMY_APIKEY,
  ALCHEMY_GOERLI_APIKEY,
  ALCHEMY_MUNBAI_APIKEY
} = process.env;

module.exports = {
  // ビルドしたABIファイルの出力先
  contracts_build_directory: path.join(__dirname, "./../client/src/contracts"),
  // ネットワーク設定
  networks: {
    // ローカル
    local: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    // テストネット1
    rinkeby: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://eth-rinkeby.alchemyapi.io/v2/${ALCHEMY_APIKEY}`
        );
      },
      network_id: 4,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // テストネット2
    goreli: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_GOERLI_APIKEY}`
        );
      },
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // テストネット3
    shibuya: {
      provider: () => {
        return new HDWalletProvider(
          MNEMONIC,
          `https://shibuya.public.blastapi.io`
        );
      },
      network_id: 81,
      gas: 500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    // テストネット4
    /*
    munbai: {
      provider: new HDWalletProvider2(MNEMONIC,`https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_MUNBAI_APIKEY}`),
      network_id: 80001,
      // gas: 500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
    */
  },
  compilers: {
    solc: {
      version: "0.8.0",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
       settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
      //  evmVersion: "byzantium"
      }
    }
  },
};
