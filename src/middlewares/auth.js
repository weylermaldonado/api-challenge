
function validateUser({ getAuthUserById }) {
    return function(req, res, next) {
        let { userId } = req.params;

        userId = Number(userId);

        const isValidUser = getAuthUserById(userId);
    
        if (!isValidUser) {
            return res.status(401).json({ error: true, message: 'Unauthorized user.' });
        }

        next();
    }
}

module.exports = validateUser;