const DappMessaging = artifacts.require('DappMessaging');

module.exports = function(deployer) {
  deployer.deploy(DappMessaging);
};
