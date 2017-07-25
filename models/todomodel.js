var mongoose= require('mongoose');
var schema = mongoose.Schema;

var tableschema = new schema({
     company:String,
     username:String,
     job:String,
     isdone:Boolean,
     backs:Boolean
});

var todos = mongoose.model('todos',tableschema);

module.exports = todos;