import { Outlet, Link, useLocation } from 'react-router-dom';

const menuItems = [
  {
    path: 'bevezetes',
    menuItem: '08.07 - Bevezetés',
  },
  {
    path: 'jsx-komponensek',
    menuItem: '08.08 - JSX, komponensek',
  },
  {
    path: 'propok',
    menuItem: '08.12 - Propok',
  },
  {
    path: 'listaelemek-megjelenitese',
    menuItem: '08.14 - Listaelemek megjelenítése',
  },
  {
    path: 'dinamikus-lista',
    menuItem: '08.15 - Dinamikus lista',
  },
  {
    path: 'eventek-todo',
    menuItem: '08.22 - Eventek, todo',
  },
  {
    path: 'kontrollalt-inputok',
    menuItem: '08.24 - Kontrollált inputok',
  },
  {
    path: 'felteteles-megjelenites-effektek',
    menuItem: '08.26 - Feltételes megjelenítés, effektek',
  },
  {
    path: 'refek',
    menuItem: '08.28 - Refek',
  },
  {
    path: 'context',
    menuItem: '08.29 - Context',
  },
  {
    path: 'context-gyakorlas',
    menuItem: '08.31 - Context gyakorlás',
  },
  {
    path: 'formok',
    menuItem: '09.02 - Formok - ismétlés',
  },
  {
    path: 'styling',
    menuItem: '09.04 - Styling in React',
  },
  {
    path: 'router',
    menuItem: '09.05 - Router',
  },
  {
    path: 'router-gyakorlas',
    menuItem: '09.07 - Router gyakorlás',
  },
  {
    path: 'searchparams',
    menuItem: '09.09 - Search Params',
  },
  {
    path: 'searchparams-solutions',
    menuItem: '09.11 - Search Params Solutions',
  },
];

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <header>
        <nav>
          <ul className="list-group mb-4">
            {menuItems.map((item) => (
              <li className="list-group-item list-group-item-action" key={item.path}>
                <Link to={`/${item.path}`}>{item.menuItem}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <div>
          <h1>{pathname.slice(1).toUpperCase()}</h1>
          <Outlet />
        </div>
      </main>
      <footer>Footer</footer>
    </>
  );
}
