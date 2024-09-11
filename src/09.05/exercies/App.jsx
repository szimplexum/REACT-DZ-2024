import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function App() {
  return (
    <div>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
