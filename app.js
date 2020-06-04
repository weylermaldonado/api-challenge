const express = require('express');
const bodyParser = require('body-parser');
/**
 *
 */
class App {

  constructor(router, port) {
    this.app = express();
    this.port = port || 3000;
    this.router = router;

    this.initializeConfig();
    return this;
  }
  /**
 *
 */
  listen() {
    this.app.listen(this.port, () => {
      console.log(`API running in port: ${this.port}`);
    });
  }
}

/**
 *
 */
function initializeMiddlewares() {
  this.app.use(bodyParser.urlencoded({ extended: true }));
  this.app.use(bodyParser.json());
  this.app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      return res.status(400).json({
          error: true,
          message: 'Malformed JSON.'
      });
    }

    next();
  });
}


/**
 *
 */
function initializeRouter() {
  const routes = this.router;
  for (const route in routes) {
    if (routes.hasOwnProperty(route)) {
      const element = routes[route];
      this.app.use(element);
    }
  }
}

App.prototype.initializeConfig = function() {
  initializeMiddlewares.call(this);
  initializeRouter.call(this);
};


module.exports = App;
