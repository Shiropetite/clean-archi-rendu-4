import { Todo } from "../types/todo";
import { display } from "./displayer";
import { createTodo, deleteTodo, sortList, markTodo } from "./todo";

export const runCommand = (todoList: Todo[]): void => {
    const processArgs = process.argv.slice(2);

    if (processArgs.length === 0) {
        throw new Error("Command is required");
    }

    if (processArgs[0] === "create") {
        if (processArgs.length < 2) {
            throw new Error("Task name is required");
        }

        createTodo(todoList, processArgs[1]);
    }
    else if (processArgs[0] === "mark") {
        if (processArgs.length < 2) {
            throw new Error("Task name is required");
        }

        markTodo(todoList, processArgs[1]);
    }
    else if (processArgs[0] === "delete") {
        if (processArgs.length < 2) {
            throw new Error("Task name is required");
        }

        deleteTodo(todoList, processArgs[1]);
    }
    else if (processArgs[0] === "list") {
        display(sortList(todoList));
    }
    else {
        throw new Error("Invalid command");
    }
};
