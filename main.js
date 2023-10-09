let addTodoButton = document.getElementById("addTodo");
let todoContainer = document.getElementById("todo-container");
let inputField = document.getElementById("inputField");

addTodoButton.addEventListener("click", () => {
  if (inputField.value.length > 0) {
    let paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-styling");
    paragraph.innerHTML = inputField.value;
    todoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener("click", () => {
      paragraph.style.textDecoration = "line-through";
    });
    paragraph.addEventListener("dblclick", () => {
        
      todoContainer.removeChild(paragraph);
    });
  }
});
