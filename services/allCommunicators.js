const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
  getAllCommunicators: (id,callback ) => {
    MessageRepository.allCommunicators(id ,(err, data) => {
      callback(err, data);
    });
  }
}