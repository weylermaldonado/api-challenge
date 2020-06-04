// Authorized users
const AUTH_USERS = [55, 10];

function getAuthUserById(userId) {
    return AUTH_USERS.find(user => user === userId);
}


module.exports = { getAuthUserById };