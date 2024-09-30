import { useState } from 'react';
import useTodoStore from './Component/Todo';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { todos, addTodo, deleteTodo } = useTodoStore(state => state);

  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="bg-gray-500 shadow-lg p-10 w-1/2 rounded-lg">
        <h1 className="text-3xl font-bold">Todos!</h1>
        <h4 className="mt-4">Add your daily task</h4>
        
        <input
          type="text"
          placeholder="Enter Your Todo"
          className="w-full h-10 p-2 rounded-lg mt-4"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={() => {
             if (inputValue.trim()) {
              addTodo(inputValue);
              setInputValue('');
            }
          }}
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg"
        >
          Add Todo
        </button>

        <ul className="mt-6">
          {todos.map((todo, index) => (
            <li
              key={index}
               className="flex justify-between bg-white text-black p-2 mt-2 rounded-lg"
            >
              {todo}
              <button
                onClick={() => deleteTodo(index)}
                className="bg-red-500 text-white px-2 rounded-lg"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
