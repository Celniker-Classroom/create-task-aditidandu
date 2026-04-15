let tasks = [];

function addTask(){
    let name = document.getElementById("task").value;
    let priority = document.getElementById("priority").value; 
    let deadline = document.getElementById("deadline").value;
    
    let task = {
        name: name,
        priority: priority,
        deadline: deadline,
        completed: false
    }

    tasks.push(task);
    displayTasks();
}


function toggleComplete(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}


function displayTasks(){
    let list = document.getElementById("taskList");
    let output = "";

    tasks.sort(function(a, b){
        let priorityOrder = {high:1, medium:2, low:3};
        if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
            return priorityOrder[a.priority] - priorityOrder[b.priority];
        } else {
            return new Date(a.deadline) - new Date(b.deadline);
        }

    });


    for (let i = 0; i < tasks.length; i++){

        let highlights = "";
        if (tasks[i].priority === "high"){ 
            highlights = "high";
        }else if (tasks[i].priority === "medium"){ 
            highlights = "medium";
        }if (tasks[i].priority === "low"){ 
            highlights = "low";
        }

        if (tasks[i].completed === true) {
            output += "<s>";
        }
        
        output += "<span class='" + highlights + "'>" + tasks[i].name + " (" + tasks[i].priority + ")" + " - Due: " + tasks[i].deadline + "</span>";
        
        if (tasks[i].completed === true) {
            output += "</s>";
        }
        
        output += " <button onclick='toggleComplete(" + i + ")'>checkmark</button>";
        output += "<br>";
    }
    

    list.innerHTML = output;
}
