import { Link } from 'react-router-dom';

export default function Todo({ todoId, description, isCompleted }) {
  return (
    <div>
      <Link to={`/router/todos/${todoId}`}>{description}</Link>
    </div>
  );
}
