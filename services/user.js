const UserRepository = require("../repositories/UserRepository");

module.exports = {
  findAll: callback => {
    UserRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    UserRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  addOne: (newData, callback) => {
      UserRepository.createOne(newData, (err,data) => {
          callback(err, data);
      });
  },
   
  updateOne: (id, newData, callback) => {
       UserRepository.updateOne(id, newData, (err,data) => {
        callback(err, data);
       });
  },

  deleteOne: (id, callback) => {
      UserRepository.deleteOne(id, (err,data) => {
          callback(err, data);
      });
  }

};