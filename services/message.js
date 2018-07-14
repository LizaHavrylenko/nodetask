const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  findAll: callback => {
    MessageRepository.getAll((err, data) => {
      callback(null, data);
    });
  },

  findOne: (id, callback) => {
    MessageRepository.getById(id, (err, data) => {
      callback(err, data);
    });
  },

  addOne: (id, callback) => {
      MessageRepository.createOne(id, (err,data) => {
          callback(err, data);
      });
  },
   
  updateOne: (id, newData, callback) => {
       MessageRepository.updateOne(id, newData, (err,data) => {
        callback(err, data);
       });
  },

  deleteOne: (id, callback) => {
      MessageRepository.deleteOne(id, (err, data) => {
          callback(err, data);
      });
  }

};