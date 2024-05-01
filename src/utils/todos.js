
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


const CreateToDo = (title, description, priority) => {
    let date = new Date();
    let name = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}`
    let ToDos = GetToDos();
    if (ToDos[0][name]) {
        ToDos[0][name] = [{ title: title, description: description, priority: priority }, ...ToDos[0][name]]
    }
    else {
        ToDos[0][name] = [{ title: title, description: description, priority: priority }]
    }
    localStorage.setItem("ToDos", JSON.stringify(ToDos))
}



export { GetToDos, CheckToDos, CreateToDo } 