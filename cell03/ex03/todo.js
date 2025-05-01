var todoList = [];

function addNew() {
    var inputValue = prompt("Please enter a to-do task:");

    if (inputValue == null) return;

    if (inputValue.length > 0) {
        createTodo(inputValue);
        todoList.push(inputValue);
        addCookie();
    }
}

function addCookie() {
    document.cookie = "todo=" + todoList + ";path=/";
}

function loadCookie(name) {
    const cname = name + "=";
    var data = document.cookie;
    console.log(data);

    if (data != cname && data) {
        //split() add " " value to the array even No Data - using split(), the array length is at least 1.
        todoList = (data.substring(cname.length)).split(",");

        for (let i = 0; i < todoList.length; i++) {
            createTodo(todoList[i]);
        }

    }
}

function createTodo(inputValue) {
    var todo = document.createElement("div");
    var text = document.createTextNode(inputValue);
    todo.prepend(text);
    document.getElementById("ft_list").prepend(todo);
    todo.className = "todo";

    todo.addEventListener("click", function () {
        todo.remove();
        var index = todoList.indexOf(todo.innerText);
        todoList.splice(index, 1);
        addCookie(todoList);
    });
}
