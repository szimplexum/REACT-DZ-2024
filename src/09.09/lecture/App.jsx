import { Link, Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h2>09.09 - Search Params</h2>
      <Link className="btn btn-primary fs-3 me-3" to="/searchparams">
        Basic example
      </Link>
      <Link className="btn btn-primary fs-3" to="/searchparams/burgers">
        Burger App
      </Link>
      <Outlet />
    </div>
  );
}
