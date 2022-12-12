const Web3 = require('web3');
const contract = require('truffle-contract');
const messagingArtifact = require('./build/contracts/DappMessaging.json');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);
const DappMessaging = contract(messagingArtifact);
DappMessaging.setProvider(provider);

async function sendMessage(message) {
  // Get an instance of the messaging contract.
  const messaging = await DappMessaging.deployed();

  // Call the `sendMessage` function of the contract.
  await messaging.sendMessage(message);
}

async function getMessages(sender) {
  // Get an instance of the messaging contract.
  const messaging = await DappMessaging.deployed();

  // Call the `getMessages` function of the contract.
  const messages = await messaging.getMessages(sender);

  // Print the messages.
  console.log(messages);
}
