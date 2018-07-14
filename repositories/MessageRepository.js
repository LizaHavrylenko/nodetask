const connection = require("../db/dbconnect");
const Repository = require("./generalRepository");
const Message = require("../models/message");
const User = require("../models/user");

function MessageRepository() {
  Repository.prototype.constructor.call(this);
  this.model = Message;
  this.idKey = 'senderId';
}


MessageRepository.prototype = new Repository();
MessageRepository.prototype.allCommunicators = allCommunicators;



function allCommunicators(queryId, callback){

  Message.aggregate(
    [{
      $group:{
        _id: {$eq: ["$senderId" , queryId]},
        listOfCommunicators:{$addToSet: "$receiverId"}
      }
    }] ,
    (err, result) => {
       
      if (err) {
          callback(err, null);
      } else {
         let firstResult =  result[0].listOfCommunicators;
         console.log(firstResult);
          Message.aggregate(
            [{
              $group:{
                _id: {$eq: ["$receiverId" , queryId]},
                listOfCommunicators:{$addToSet: "$senderId"}
              }
            }],
          (err, result)=>{
           
            if (err) {
              callback(err, null);
          } else {
           let mergedList  = mergeLists(firstResult, result[0].listOfCommunicators);
           User.find({_id:{ $in: mergedList}}, callback);
          }
          }
        );
        function mergeLists(result1, result2){
          console.log("Result1: "+ result1);
          console.log("Result2: "+ result2);
          let arr = [...new Set([...result1, ...result2])];
          return arr;
        }
      }      
  });
}

module.exports = new MessageRepository();
