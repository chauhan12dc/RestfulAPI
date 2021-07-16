//use strict is use to like having all the convection of the language properly. Ex: :(Semicolon) is required 
'use strict';

//initiasing instance of the mongoose server 
var mongoose = require('mongoose');

//To fix the schema of the db.
var Schema = mongoose.Schema;


//providing schema for the document by asking name, date and status. Its like colums of sql but here its nosql
var TaskSchema = new Schema({
	name:{
		type:String,
		required:[true,'Enter name']
	},
	Created_date:{
		type:Date,
		default:Date.now
	},
	status:{
		type:[{
			type:String,
			enum:['pending','ongoing']
		}],
		default:['pending']
	}

});

//letting know mongoose what is the schema by providing the instance of the schema variable.
module.exports = mongoose.model('Tasks',TaskSchema);