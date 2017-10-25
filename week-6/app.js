window.addEventListener("load", function() {

	var c = document.getElementById("container");
	var submit = document.getElementById("submit");
	var input = document.getElementById("new-task");
	submit.addEventListener("click", addTask);
	input.addEventListener("keydown", function(event) {
		if (event.key == "Enter") {
			addTask();
		}
	});
	
	function addTask() {
		var myTask = document.createElement("div");
		var text = document.createElement("p");
		myTask.className = "task";
		text.innerText = input.value;
		text.className = "text";
		myTask.appendChild(text);
		
		var del = document.createElement("button");
		del.className = "delete";
		del.innerText = "Delete";
		del.addEventListener("click", function() {
			c.removeChild(this.parentNode);
		});
		
		myTask.appendChild(del);
		
		c.appendChild(myTask);
	}

});