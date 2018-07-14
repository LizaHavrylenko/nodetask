function Repository() {}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.createOne = createOne;
Repository.prototype.updateOne = updateOne;
Repository.prototype.deleteOne = deleteOne;

function getAll(callback) {
  var model = this.model;
  var query = model.find();
  query.exec(callback);
}

function getById(id, callback) {
  var model = this.model;
  var query = model.findOne({
    _id: id
  });
  query.exec(callback);
}

function createOne(newData, callback) {
  var model = this.model;
  model.create(newData, callback);
}

function updateOne(id, newData, callback) {
  var model = this.model; 
  model.update({_id:id}, {$set:newData}, callback);
}

function deleteOne(id, callback) {
  var model = this.model; 
  model.deleteOne({_id:id}, callback);
}

module.exports = Repository;