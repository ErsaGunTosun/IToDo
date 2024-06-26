
const CheckToDos = () => {
    if (localStorage.getItem("ToDos") === null) {
        localStorage.setItem("ToDos", JSON.stringify([{}]));
        return false;
    }
    else {
        return true;
    }
}

const GetToDos = () => {
    let ToDos = JSON.parse(localStorage.getItem("ToDos"))
    return ToDos
}


const CreateToDo = (name, id, title, description, priority) => {
    let ToDos = GetToDos();
    if (ToDos[0][name]) {
        ToDos[0][name] = [{ id: id, title: title, description: description, priority: priority }, ...ToDos[0][name]]
    }
    else {
        ToDos[0][name] = [{ id: id, title: title, description: description, priority: priority }]
    }
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
}

const deleteTodoLocalStorage = (dataText, id) => {
    let ToDos = GetToDos();
    ToDos[0][dataText] = ToDos[0][dataText].filter((todo) => todo.id !== id)
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
}
const setTodoStatusLocalStroge = (dataText, id) => {
    let ToDos = GetToDos();
    ToDos[0][dataText].map((todo) => {
        if (todo.id === id) {
            todo.finish = !todo.finish
        }
    })
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
}



export { GetToDos, CheckToDos, CreateToDo, deleteTodoLocalStorage,setTodoStatusLocalStroge } 