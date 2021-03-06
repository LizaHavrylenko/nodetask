const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const User = require("../models/user");

function UserRepository() {
  Repository.prototype.constructor.call(this);
  this.model = User;
  this.idKey = 'email';
}

UserRepository.prototype = new Repository();

module.exports = new UserRepository();
