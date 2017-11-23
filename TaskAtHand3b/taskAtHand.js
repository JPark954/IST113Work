"use strict";


function taskAtHandApp()
{
	var version = "v3.3";
	appStorage = new appStorage("taskAtHand");
	taskList = new TaskList();
	timeOutId = 0;

	function setStatus(msg, noFade)
	{
		$("#app>footer").text(msg).show;
		if(!noFade)
		{
			$("#app>footer").fadeOut(1000);
		}
	}
	
	this.start = function()
	{
		$("#new-task-name").keypress(function(e) {
			if (e.which == 13) 
				
				{
					addTask();
					return false;
					
				}
		})
		.focus();
		
		$("#app header").append(version);
		loadTaskList();
		setStatus("ready");
		
		$("#theme").change(onChangeTheme);
	};


function onChangeTheme()
{
	var theme = $("#theme>option").filter(":selected").val();
	setTheme(theme);
	appStorage.setValue("theme", theme);
}

function setTheme(theme)
{
	$("#theme-style").attr("href", "themes/" + theme + ".css");
}
function loadTheme()
{
	var theme = appStorage.getValue("theme");
	if (theme)
	{ setTheme(theme);
$("theme>option[value="+ theme + "] ").attr("selected","selected");
	}
}

	
function saveTaskList()
{
	
	if (timeOutId) clearTimeout(timeOutId);
	setStatus("saving changes...", true);
	timeOutId = setTimeout(function()
	{
	appStorage.setValue("taskList", taskList.getTasks());
	timeOutId = 0;
	setStatus("changes saved.");
	},
	2000);
	//var tasks = [];
	//$("#task-list .task span.task-name").each(function(){
		//tasks.push($(this).text())
	//});
}

	

function addTask()
{
	var taskName = $("#new-task-name").val();
	if (taskName) {
		var task = new Task(taskName);
		taskList.addTask(task);
		appStorage.setValue("nextTaskId", Task.nextTaskId);
		addTaskElement(task);
		saveTaskList();
	$("#new-task-name").val("").focus();
	}
	
}

function addTaskElement(task)
{
	var $task = $("#task-template .task").clone();
	$task.data("task-id", task.id);
	$("span.task-name", $task).text(task.name);
	
	$("#task-list").append($task);
	
	$("button.delete", $task).click(function(){
		removeTask($task);
	});
	
	$("button.move-up", $task).click(function(){
		moveTask($task, true);
	});
	
	$("button.move-down", $task).click(function(){
		moveTask($task, false);
	});
	
	$("span.task-name", $task).click(function(){
		onEditTaskName($(this));
	});
	
	$("input.task-name", $task).change(function(){
		onChangeTaskName($(this));
	});
	
	blur(function(){
		$(this).hide().siblings("span.task-name").show();
	});
	
	$task.click(function(){	onSelectTask($task); });
	$("button.toggle-details", $task).click(function(){
			toggleDetails($task);
	});
	$("details input, .details select", $task).each(function() {
		var $input = $(this);
		var fieldName = $input.data("field");
		$input.val(task[fieldName]);
	});
	
	$("details input, .details select", $task).change(function(){
		onChangeTaskDetails(task.id, $(this));
	});
	
}
	
	function toggleDetails ($task)
	{
		$(".details", $task).slideToggle();
		$("button.toggle-details", $task).toggleClass("expanded");
	}

	
	
		
	
	function onSelectTask($task){
		if($task)
		{
			$task.siblings(".selected").removeClass("selected");
			$task.addClass("selected");
		}
	}
	
	function removeTask($task){
		$task.remove();
		saveTaskList();
	}
	
	function moveTask($task, moveUp){
		if (moveUp){
			$task.insertBefore($task.prev());
		}
		else{
			$task.insertAfter($task.next());
		}
		saveTaskList();
	}
	saveTaskList();
	
}
function onChangeTaskDetails(taskid, $input)
{
	var task = taskList.getTask(taskId)
	if(task)
	{
		var fieldName = $input.data("field");
		task[fieldName] = $input.val();
		saveTaskList();
	}
}

	
	function onEditTaskName($span){
	$span.hide()
		.siblings("input.task-name")
		.val($span.text())
		.show()
		.focus();
}

function onChangeTaskName($input){
	$input.hide();
	var $span = $input.siblings("span.task-name");
	if($input.val()){
		$span.text($input.val());
	}
	$span.show();
	
}
function loadTaskList(){
	var tasks = appStorage.getValue("taskList");
	taskList = new TaskList(tasks);
	rebuildTaskList();
	/* var tasks = appStorage.getValue("taskList");
	if(tasks){
		for (var i in tasks){
			addTaskElement(tasks[i]);
		}
	}*/
}

function rebuildTaskList()
{
	$("task-list").empty();
	//create DOM element for tasks
	taskList.each(function(task)
	{
		addTaskElement(task);
	});
}





 $(function() {
	window.app = new taskAtHandApp();
	window.app.start();
});







