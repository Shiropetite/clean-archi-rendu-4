import fs from 'fs';
import todolist from '../data/todolist.json';
import { Todo } from "../types/todo";

export const loadTodoList = (): Todo[] => {
    return todolist.map((todo) => {
        return {
            name: todo.name,
            isDone: todo.isDone,
            createdAt: new Date(todo.createdAt),
        }
    });
}

export const saveTodoList = (todolist: Todo[]) => {
    fs.writeFileSync('src/data/todolist.json', JSON.stringify(todolist));
}