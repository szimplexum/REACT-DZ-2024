import { useLocation } from 'react-router-dom';

export default function PostAbout() {
  const location = useLocation();
  return (
    <div>
      <h1>This is our Post App</h1>
      <p>The current URL is: {location.pathname}</p>
    </div>
  );
}
