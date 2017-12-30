/**
 * Created by Ankit on 22/02/17.
 */
var mongoose    =   require("mongoose");
mongoose.connect('mongodb://localhost:27017/demo');
// create instance of Schema
var mongoSchema =   mongoose.Schema;
// create schema
var userSchema  = {
    "userEmail" : String,
    "userPassword" : String
};
// create model if not exists.
module.exports = mongoose.model('userLogin',userSchema);