
//use strict is use to like having all the convection of the language properly. Ex: :(Semicolon) is required 
'use strict';

//initiasing instance of the mongoose server 
var mongoose = require('mongoose');

//specifying which document need to be used to work with.
var Task = mongoose.model('Tasks');

//function to list all the todo stored in the database
exports.listTasks = function(req,res){
	Task.find({},function(err,task){
		if (err) {
			res.send(err);
		}
		//the response from api is converted from json to read it using iteration
		res.json(task);
	});
};


//function to create new todoList using function method.
exports.createTasks = function(req,res){
	//passing what content need to save 
	var new_task = new Task(req.body);

	//it saves using the save function to the server.
	new_task.save(function(err,task)
	{
		if (err) {
			res.send(err);
		}
		//reading the response.
		res.json(task);
	})
};


//fuction to read specific todo by passing its unique id.
exports.listSpecificTask = function(req,res){
	//using findById() to find by passing the required id as a argument.
	Task.findById(req.params.taskId,function(err,task){
		if (err) {res.send(err);}
		res.json(task);
	});
};


//fuction to update specific todo by passing its unique id.
exports.updateSpecificTask = function(req,res){
	//using findOneAndUpdate() it updates specfic todo by taking id and new content as input.
	Task.findOneAndUpdate({_id: req.params.taskId}, req.body,{new:true},function(err,task){
		if (err) {res.send(err);}
		res.json(task);
	});
};


//fuction to delete specific todo by passing its unique id.
exports.deleteSpecificTask = function(req,res){
	//using remove function to delete the todo by passing the specific id as arguement.
	Task.remove({_id:req.params.taskId},function(err,task){
		if (err) {res.send(err);}
		res.json({message:'Task successfully deleted'});
	});
};