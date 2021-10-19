require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey entry off suggest name remember stick honey hidden arctic army genius'; 
let testAccounts = [
"0x4d456c15b2635ec95101415b94c662621bed26731a39f8ffec41992fdf7f13ec",
"0x22d73be800bc1dbd63b007623672c0d76593f38e24af43fb0435119eb3ad8e2f",
"0xad9544bcc8f21b57deba79d0d3f09a71348b0570c59dac7d5b4a943c9ee06747",
"0x93392ab43eeb0bb7e6503559a3eb0821bca40f3db252f9736eeb5d41cce34cfd",
"0x597fbe71cc0fe576b4144adcc38208bb68bb1a859a0bc654d0115b44d3a2bfba",
"0x35a3f8f0a36dabdcd472a42ca5e53bbcaa3cff2bfaac06183d0d4598eb30eaf7",
"0xa1f87aa95acb518d7dfe1e7f9bd3c9ba2c5bdd20df569ef7b7ded7dd2d706f08",
"0x10861ecadee35c1214596ec631e04ac0805f7432615a67794100ee4fa8c195df",
"0x28e3a598042db91355dc374c0ab8709f103c75af836b2e5c50fee071f86f3073",
"0xda056caeca15775d0d9fd90181f67758e5f4c73e6fd834c8215770fd9174e216"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

