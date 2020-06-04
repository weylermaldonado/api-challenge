const App = require('./app.js');
const router = require('./src/routes');

const app = new App(router)

app.listen();