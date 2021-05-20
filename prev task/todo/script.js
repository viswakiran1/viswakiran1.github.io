showtask();
let addtaskinput = document.getElementById("input");
let addtaskbtn = document.getElementById("btn");

addtaskbtn.addEventListener("click", function(){
    addtaskinputval = addtaskinput.value;
    if(addtaskinputval.trim()!=0){
        let task = localStorage.getItem("todo");
        if(task == null){
                taskObj = [];
        }
        else{
            taskObj = JSON.parse(task);
        }
        taskObj.push(addtaskinputval);
        localStorage.setItem("todo", JSON.stringify(taskObj));  
    }
    showtask();
})

function showtask(){
    let task = localStorage.getItem("todo");
    if(task == null){
            taskObj = [];
    }
    else{
        taskObj = JSON.parse(task);
    }
    let html = '';
    let addedtasklist = document.getElementById("list");
    taskObj.forEach((item, index) => {
        html += `<tr>
                    <th scope="row">${index+1}</th>
                    <td>${item}</td>
                    <td><button type="button" onclick="deleteitem(${index})"class="text-danger"><i class="fa fa-trash"></
                    i>Remove</button></td>
                </tr>`;

    });
    addedtasklist.innerHTML = html;
}



function deleteitem(index){
    let task = localStorage.getItem("todo");
    let taskObj = JSON.parse(task);
    taskObj.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(taskObj));
    showtask();
}