import { create } from 'zustand';

const useTodoStore = create((set) => ({
  todos: [], // Empty list of todos

  addTodo: (todo) => set((state) => ({
    todos: [...state.todos, todo], // Add todo to the list
  })),

  deleteTodo: (index) => set((state) => {
    const todos = [...state.todos];
    todos.splice(index, 1); // Remove the item
    return { todos };
  }),
}));

export default useTodoStore;



