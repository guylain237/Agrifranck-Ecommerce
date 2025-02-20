const mongoose = require('mongoose');



const schemaVerification = new mongoose.Schema({
    userId: String,
   uniqueString:  String ,
    createdAt:  Date ,
   expireAt:  Date
});

module.exports = mongoose.model('UserVerification', schemaVerification);