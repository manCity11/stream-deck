const os = require('os');
const _ = require('lodash');

const IP_FAMiLY = {
  IP_V4: 'IPv4',
};

const getServerIp = () => {
  const interfaces = os.networkInterfaces();
  const cardsList = [];

  _.each(interfaces, (cards) => {
    cardsList.push(...cards);
  });

  return _.get(_.find(cardsList, ({ family, internal }) => family === IP_FAMiLY.IP_V4 && !internal), 'address');
};

exports.getServerIp = getServerIp;
