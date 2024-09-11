import { useParams } from 'react-router-dom';

const todoList = [
  { id: 1, description: 'csináld meg', isCompleted: false },
  { id: 2, description: 'csináld meg', isCompleted: false },
  { id: 3, description: 'csináld meg', isCompleted: false },
  { id: 4, description: 'csináld meg', isCompleted: false },
];

export default function TodoDetail() {
  const { todoId } = useParams();
  const todo = todoList.find((todo) => todo.id === Number(todoId));
  return (
    <div>
      <p>Todo ID: {todo.id}</p>
      <h1>{todo.description}</h1>
      <p>Completed: {todo.isCompleted ? 'Yes' : 'No'}</p>
    </div>
  );
}
