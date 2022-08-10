# MultiSigWalletContract
MultiSigWalletを実装したスマートコントラクト用のリポジトリになります。

### test result

```cmd
Using network 'local'.


Compiling your contracts...
===========================
> Compiling .\contracts\MultiSigWallet.sol
> Compiling .\contracts\WalletFactory.sol
> Artifacts written to C:\Users\secom\AppData\Local\Temp\test--18252-wfaSQgDZ6L9g
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang


  Contract: MultiSigWallet Contract tests!!
    initialization
      竏・[0m confirm owner address (463ms)
      竏・[0m confirm number of required (135ms)
      竏・[0m confirm name of wallet (244ms)
    receive test
Tx Hash: 0x8eb1d0c40e327fd448f4b659e680d0f18583ef5a01463d83278c410f4b7a73bb
txData: {
  hash: '0x8eb1d0c40e327fd448f4b659e680d0f18583ef5a01463d83278c410f4b7a73bb',
  nonce: 0,
  blockHash: '0x734762fda98422df2496a7e2537c18098272118bcc9a33d855cb196e98446d0b',
  blockNumber: 7,
  transactionIndex: 0,
  from: '0x6449b8D6B66Dbdc69aCe3023f4A9317C04aA60CB',
  to: '0xf35c47EA101b41fE9eFEbb7c77FBa518457D04e6',
  value: '50000000000000000',
  gas: 90000,
  gasPrice: '20000000000',
  input: '0x',
  v: '0x26',
  r: '0x1a6fbbc843e473da0d9722dce126dd194d971f2171716409b0b2be69e955da38',
  s: '0x50b551c3758b003eaa2a1f99b3b3082dd9829f8a79d93db6009a5ad6d0ea4ebf'
}
      竏・[0m deposit (505ms)
    submit test
      竏・[0m submit transaction (1694ms)
      竏・[0m should be revert from invalid address (458ms)
    approve test
      竏・[0m approve transaction (2682ms)
      竏・[0m should be revert from invalid address (1265ms)
      竏・[0m should be revert invalid txId (1597ms)
    execute test
      竏・[0m execute (2885ms)
      竏・[0m should be revert invalid txId (2595ms)
      竏・[0m should be revert with insufficient approvement  (2219ms)
      竏・[0m this tx is aleady executed (3464ms)
    revoke test
      竏・[0m revoke (3728ms)
      竏・[0m should be revert invalid txId (2947ms)
      竏・[0m should be revert from invalid address (2439ms)
      竏・[0m should be revert from invalid address (1876ms)


  17 passing (41s)  
```

### 必要機能
1. ウォレット作成画面
2. ウォレット詳細画面(トランザクションデータ)
3. ウォレット一覧画面(Home画面)

### result of migration

#### local

```cmd
Compiling your contracts...
===========================
> Compiling .\contracts\MultiSigWallet.sol
> Compiling .\contracts\WalletFactory.sol
> Artifacts written to C:\Users\secom\git\MultiSigWalletDApp\client\src\contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang


Starting migrations...
======================
> Network name:    'local'
> Network id:      5779
> Block gas limit: 6721975 (0x6691b7)


1_mulitSig_deploy.js
====================

   Deploying 'MultiSigWallet'
   --------------------------
   > transaction hash:    0x3e340a23b7662d033b0d7e538d290d5e0535d5ca37437a8c5082cd3bbdd7a525
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 0
   > contract address:    0xb0A7E7d2aeFbCaCbD6CAB2b0b869457990DD4Abd
   > block number:        65
   > block timestamp:     1658737613
   > account:             0x5acD0A3c860e7a4cb54220c745877F3aF6A0F532
   > balance:             99.17366194
   > gas used:            1932550 (0x1d7d06)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.038651 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:            0.038651 ETH


2_factory_deploy.js
===================

   Deploying 'WalletFactory'
   -------------------------
   > transaction hash:    0xbe50fdccfb8455e455fb83dc576a6b02307789ec72dbc792a155537ad8f54c25
- Blocks: 0            Seconds: 0
   > Blocks: 0            Seconds: 0
   > contract address:    0x140D83a48AF13868d65A3DBb027B57e437667431
   > block number:        66
   > block timestamp:     1658737614
   > account:             0x5acD0A3c860e7a4cb54220c745877F3aF6A0F532
   > balance:             99.11474254
   > gas used:            2945970 (0x2cf3b2)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0589194 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0589194 ETH

Summary
=======
> Total deployments:   2
> Final cost:          0.0975704 ETH

```

### 参考文献
1. <a href="https://lab.miguelmota.com/ethereum-input-data-decoder/example/">InputDataDecoder</a>
2. <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html">Web3.jsのドキュメント</a>