
var todo = ["hello arjun"];
window.setTimeout(function() {
var task = prompt("What do you want to perform?");

while(task != "quit"){
	if(task == "new"){
		newToDo();
	}
	else if(task == "list"){
		listToDo();

	} 
	else if(task == "delete"){
		deleteTodo();
	}
	var task = prompt("What do you want to perform?");
}
console.log("ToDo has been Ended..")
}, 500);

function listToDo(){
	function toDo(element,i){
			console.log(i + ": " + element );
		}
	console.log("************");
	todo.forEach(toDo)
	console.log("************");
}

function newToDo(){
	var newTodo = prompt("What you want to add..")
	todo.push(newTodo);
	console.log("Todo has been added");
}

function deleteTodo(){
	//ask for the index
	var index = prompt("Enter the index of the todo to be deleted");
	//delete the task
	todo.splice(index,1);
	console.log("Todo has been deleted");
}
