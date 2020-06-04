const authMiddleware = require('./auth.js');
const store = require('../store/persistence.js');

const initAuthMiddleware = authMiddleware(store);

module.exports = initAuthMiddleware;
