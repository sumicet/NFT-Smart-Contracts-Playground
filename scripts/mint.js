const { task } = require('hardhat/config');
const { getContract } = require('./helpers');

task('mint', 'Mint an NFT')
    .addParam('address', 'The address to receive the NFT')
    .setAction(async function (taskArguments, hre) {
        const contract = await getContract('NFT', hre);

        const txResponse = await contract.mintTo(taskArguments.address, {
            gasLimit: 500_000,
        });

        console.log(`Transaction hash: ${txResponse.hash}`);
    });
