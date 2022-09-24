const express = require("express");
const cors = require("cors");
class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = "/api/users";

    // Middlewares
    this.middlewares();

    // Routes of my application
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());

    // Read and parse request body
    this.app.use(express.json());

    // Public folder
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersRoutePath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running in http//:localhost:${this.port}`);
    });
  }
}

module.exports = Server;
