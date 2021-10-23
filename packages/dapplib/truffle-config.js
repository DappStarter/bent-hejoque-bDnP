require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other food main release saddle concert gown light army gesture'; 
let testAccounts = [
"0x44244b86ccfe93c275e5df30ad23b2cfc1fd4fdc4b8033c8e419824cda2ad43b",
"0xd3347fb576076e3f66d84970cb16a1119f72f9a41eb9090b073f0c3253726194",
"0x01a355c7a9205622ed0afec2ef470a799bbd8bd508a2be2298442ecdb2901a7d",
"0x6b7f7fdfb8f7e5854ec4aecd0a8e992101e8a48121e7232304f26505faf2a8cb",
"0x60ee3ddb64f067fe7f77b8955cfcc1459f5a777d45797ce86f64697c5b62bd8b",
"0x1b9581cb2e6e0996653816ff21e65b2ca300ef003c6a6e5dac121a709bc0aa92",
"0xd42dc5e522f014acc3af4f6e840af733d9ff38679404117d9015d839855e3f44",
"0x13bb074c8e9414ba5a7f8fcd1fdc4cb1cbe6d960a3b4b57cdbf8c4713befbad7",
"0x02187c2785017d912223217fa36a83d442b3c5a09096bc2e95affbca781bb191",
"0x6d87438bedbdeec702c93049ef4ce3826ffd982da04c93f86fc2531ba0a7ad75"
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

