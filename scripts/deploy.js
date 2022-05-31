const { task } = require('hardhat/config');
const { getAccount } = require('./helpers');

task('check-balance', 'Display the balance').setAction(async function (taskArguments, hre) {
    const account = getAccount();
    console.log(`Balance: ${await account.getBalance()}`);
});

task('deploy', 'Deploy NFT.sol').setAction(async function (taskArguments, hre) {
    const NFT = await hre.ethers.getContractFactory('NFT', getAccount());
    const nft = await NFT.deploy();
    console.log(`Deployed to ${nft.address}`);
});
