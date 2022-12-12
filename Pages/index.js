import React, { useState } from 'react';
import Web3 from 'web3';
import contract from 'truffle-contract';
import messagingArtifact from './build/contracts/DappMessaging.json';

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);
const DappMessaging = contract(messagingArtifact);
DappMessaging.setProvider(provider);

function App() {
  const [message, setMessage] = useState('');

  async function sendMessage() {
    // Get an instance of the messaging contract.
    const messaging = await DappMessaging.deployed();

    // Call the `sendMessage` function of the contract.
    await messaging.sendMessage(message);
  }

  return (
    <div>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send Message</button>
    </div>
  );
}
