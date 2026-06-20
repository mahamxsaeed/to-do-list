let input = document.getElementById("add-task")
let addButton = document.getElementById("add-button")
let taskList = document.getElementById("task-list")

addButton.addEventListener ("click", function() {
    let value = input.value
    let li = document.createElement("li")
    li.textContent = value
   taskList.append(li)
   input.value = ""
})