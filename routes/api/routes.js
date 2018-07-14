const user = require("./user");
const message = require("./message");
const allCommunicators = require("./allCommunicators");
module.exports = function(app) {
  app.use("/api/user", user);
  app.use("/api/message", message);
  app.use("/api/communicators", allCommunicators)
};
