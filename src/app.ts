import { loadTodoList, saveTodoList } from "./services/parse";
import { runCommand } from "./services/runner";

const main = () => {
    const todolist = loadTodoList();
    try {
        runCommand(todolist);
    }
    catch (e) {
        console.error(e);
    }
    
    saveTodoList(todolist);
};

main()
