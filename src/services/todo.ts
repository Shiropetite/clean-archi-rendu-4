import { Todo } from "../types/todo";

/**
 * List all todos in creation ascending order
 */
export const sortList = (list: Todo[]): Todo[] => {
  return list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
}

/**
 * Add a todo to the list with a name
 */
export const createTodo = (list: Todo[], name: string): Todo => {
  const todoWithSameName = list.find((t) => t.name === name);
  
  if (todoWithSameName) {
    throw new Error('Todo already exists');
  }

  const newTodo: Todo = {
    name,
    isDone: false,
    createdAt: new Date(),
  };

  list.push(newTodo);

  return newTodo;
};

/**
 * Mark a todo as done by name
 */
export const markTodo = (list: Todo[], name: string): Todo => {
  const todo = list.find((t) => t.name === name);

  if (!(todo)) {
    throw new Error('Todo not found');
  }

  todo.isDone = true;

  return todo;
};

/**
 * Removes a todo from the list by name
 */
export const deleteTodo = (list: Todo[], name: string): void => {
  const todo = list.find((t) => t.name === name);

  if (!(todo)) {
    throw new Error('Todo not found');
  }

  const todoIndex = list.indexOf(todo);
  list.splice(todoIndex, 1);
};