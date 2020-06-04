const router = require('express').Router();

function promiseResponse() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 5000)
    });
}

router.get('/', (req, res) => {

    promiseResponse()
    .then(() => {
        return res.status(200).json({
            error: false,
            message: 'Welcome'
        });
    });
});

module.exports = router;