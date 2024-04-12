import { getDurationSince } from "./time";
import { Todo } from "../types/todo";

export const display = (todolist: Todo[]) => {
    if (todolist.length === 0) {
        console.log("La todolist est vide ! Essayez d'ajouter une tâche !");
    }
    else {
        for (const todo of todolist) {
            const formattedIndex = String(todolist.indexOf(todo) + 1).padStart(2, '0');
            const message = `[${formattedIndex}]${todo.isDone ? '[X]': '[ ]'} ${todo.name} (${getDurationSince(todo.createdAt)})`;
            console.log(message)
        }
    }
}