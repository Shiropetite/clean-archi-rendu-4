import { createTodo, deleteTodo, sortList, markTodo } from '../src/services/todo';
import { Todo } from '../src/types/todo';

describe('Todo Service', () => {
    beforeAll(() => {
        jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));
    });

    describe(sortList.name, () => {
        test('Should sort the todolist', () => {
            const inputTodoList = [
                {
                    name: 'test2',
                    isDone: false,
                    createdAt: new Date('2020-01-01T00:00:00Z')
                },
                {
                    name: 'test1',
                    isDone: false,
                    createdAt: new Date()
                },
                {
                    name: 'test3',
                    isDone: true,
                    createdAt: new Date('2020-01-01T00:00:00Z')
                }
            ];
        
            const expectedTodoList = [
                {
                    name: 'test1',
                    isDone: false,
                    createdAt: new Date()
                },
                {
                    name: 'test2',
                    isDone: false,
                    createdAt: new Date('2020-01-01T00:00:00Z')
                },
                {
                    name: 'test3',
                    isDone: true,
                    createdAt: new Date('2020-01-01T00:00:00Z')
                }
            ];
        
            const resultTodoList = sortList(inputTodoList);
            expect(resultTodoList).toStrictEqual(expectedTodoList);
        });
    });

    describe(createTodo.name, () => {
        test('Should create a todo given its name and add it to the todolist', () => {
            const todoList: Todo[] = [];
            const expectedTodo = {
                name: 'test1',
                isDone: false,
                createdAt: new Date()
            };
            const expectedTodoList = [expectedTodo];
        
            const resultNewTodo = createTodo(todoList, 'test1');
            expect(resultNewTodo).toStrictEqual(expectedTodo);
            expect(todoList).toStrictEqual(expectedTodoList);
        });
        
        test('Try to create todo that already exist', () => {
            const todoList: Todo[] = [{
                name: 'test1',
                isDone: false,
                createdAt: new Date()
            }];
        
            expect(() => createTodo(todoList, 'test1')).toThrow('Todo already exists');
        });
    });

    describe(markTodo.name, () => {
        test('Should mark as done a todo given its name', () => {
            const todoList: Todo[] = [{
                name: 'test1',
                isDone: false,
                createdAt: new Date()
            }];
        
            const todoListExpected: Todo[] = [{
                name: 'test1',
                isDone: true,
                createdAt: new Date()
            }];
        
            const todoListResult = markTodo(todoList, 'test1');
        
            expect(todoListResult).toStrictEqual(todoListExpected[0]);
            expect(todoList).toStrictEqual(todoListExpected);
        });
        
        test('Should throw when trying to mark a todo that does not exist', () => {
            const todoList: Todo[] = [];
            expect(() => markTodo(todoList, 'test1')).toThrow('Todo not found');
        });
    });

    describe(deleteTodo.name, () => {
        test('Should remove a todo from the list given its name', () => {
            const todoList: Todo[] = [{
                name: 'test1',
                isDone: false,
                createdAt: new Date()
            }];
            const expectedTodoList: Todo[] = [];
        
            deleteTodo(todoList, 'test1');
            expect(todoList).toStrictEqual(expectedTodoList);
        });
        
        test('Should throw when trying to remove a todo that does not exist', () => {
            const todoList: Todo[] = [];
            expect(() => deleteTodo(todoList, 'test1')).toThrow('Todo not found');
        });
    });
});
