pragma experimental ABIEncoderV2;

pragma solidity ^0.5.0;

contract DappMessaging {
  // Define a struct to store messages.
  struct Message {
    address sender;
    string message;
    uint timestamp;
  }

  // Define a mapping to store messages.
  mapping (address => Message[]) public messages;

  // Define a function to send messages.
  function sendMessage(string memory _message) public {
    // Create a new message.
    Message memory message = Message({
      sender: msg.sender,
      message: _message,
      timestamp: now
    });

    // Add the message to the mapping.
    messages[msg.sender].push(message);
  }

  // Define a function to retrieve messages.
  function getMessages(address _sender) public view returns (Message[] memory) {
    return messages[_sender];
  }
}
