import { useState } from 'react';
import Todo from './Todo';

const todoList = [
  { id: 1, description: 'csináld meg', isCompleted: false },
  { id: 2, description: 'csináld meg', isCompleted: false },
  { id: 3, description: 'csináld meg', isCompleted: false },
  { id: 4, description: 'csináld meg', isCompleted: false },
];

export default function Todos() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(todoList);

  const handleAddTodo = () => {
    if (!newTodo.length) return;
    const newId = todos.length + 1;
    setTodos([...todos, { id: newId, description: newTodo, isCompleted: false }]);
    setNewTodo('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <Todo todoId={todo.id} description={todo.description} isCompleted={todo.isCompleted} />
          <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        </div>
      ))}
      <input
        type="text"
        name="new-todo"
        id="new-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button disabled={!newTodo.length} onClick={handleAddTodo}>
        Add todo
      </button>
    </div>
  );
}
