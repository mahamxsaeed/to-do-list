let input = document.getElementById("add-task")
let addButton = document.getElementById("add-button")
let taskList = document.getElementById("task-list")




// get the input value, create a new list item
// added it to the task list
// added checkbox
//added delete option
addButton.addEventListener ("click", function() {

    let text = document.createElement("span")
    text.innerHTML = input.value
    let li = document.createElement("li")

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let deleteItem = document.createElement("span")

    deleteItem.innerHTML = `
    <svg id="delete" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
    <path d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"></path>
    </svg>
    `
    deleteItem.addEventListener ("click", function() {

        li.remove()
    })

    let edit = document.createElement("span")
    edit.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
    </svg>
    `

    edit.addEventListener("click", function() {

        let inputEdit = document.createElement("input")
        inputEdit.type = "text"
        inputEdit.value = text.innerHTML

        li.replaceChild(inputEdit, text)
        inputEdit.focus()

        inputEdit.addEventListener("keydown", function(e) {
            if(e.key === "Enter") {
                text.innerHTML = inputEdit.value
                li.replaceChild(text, inputEdit)
            }
        })

    })
    li.append(checkbox, text, edit, deleteItem)
    taskList.append(li)
    input.value = ""
})

