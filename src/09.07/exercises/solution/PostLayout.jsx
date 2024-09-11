import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function PostLayout() {
  return (
    <div className="container mt-4">
      <h1 className="alert alert-primary">Post App</h1>
      <Link className="badge text-bg-primary fs-3 me-3" to="/router-gyakorlas">
        Blog Posts
      </Link>
      <Link className="badge text-bg-warning fs-3" to="/router-gyakorlas/about">
        About
      </Link>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
