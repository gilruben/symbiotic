const jwt = require('jsonwebtoken');

const sign = (payload) => {
  const secret = process.env.SECRET || 'All for one and one for all';
  const options = {
    audience: process.env.AUDIENCE || 'symbiotic.herokuapp.com',
    issuer: process.env.ISSUER || 'symbiotic.herokuapp.com',
    expiresIn: '90 days'
  };

  if (!payload && typeof payload !== 'object' && !Array.isArray(payload)) {
    return new Error('Payload must be an object');
  }

  return jwt.sign(payload, secret, options);
};

module.exports = sign;
