//use strict is use to like having all the convection of the language properly. Ex: :(Semicolon) is required 
'use strict';

//defining module by passing the app reference through function which contains the reference of the todoListController file.
module.exports=function(app){
	var todoList=require('../controllers/todoListController.js');

	//passing the function of todoListController file to get and post method of route to specify which function should be use for which requests like post or get. 
	app.route('/tasks').get(todoList.listTasks).post(todoList.createTasks);


	//getting todoList with specific id,updating it using put method and deleting by specificing functions of Controller classes.
	app.route('/tasks/:taskId').get(todoList.listSpecificTask).put(todoList.updateSpecificTask).delete(todoList.deleteSpecificTask);

};