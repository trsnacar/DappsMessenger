const assert = require('assert');
const truffleContract = require('truffle-contract');
const messagingArtifact = require('../build/contracts/DappMessaging.json');

const DappMessaging = truffleContract(messagingArtifact);

describe('DappMessaging', () => {
  let messaging;

  before(async () => {
    messaging = await DappMessaging.new();
  });

  it('should be able to send a message', async () => {
    const sender = '0x123456...';
    const message = 'Hello, world!';

    await messaging.sendMessage(message, { from: sender });

    const result = await messaging.getMessages();
    assert.equal(result[0].message, message);
    assert.equal(result[0].sender, sender);
  });
});
