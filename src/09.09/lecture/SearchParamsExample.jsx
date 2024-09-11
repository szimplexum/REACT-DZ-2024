import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function SearchParamsExample() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const user = searchParams.get('user') || 'No user';
  const age = searchParams.get('age') || 'Unkown';

  const handleSetUser = () => {
    searchParams.set('user', 'Alice');
    setSearchParams(searchParams);
  };

  const handleSetAge = () => {
    // setSearchParams({ age: '30' }); // felülírja a többi tartalmat
    searchParams.set('age', '30');
    setSearchParams(searchParams);
  };

  const handleDeleteUser = () => {
    searchParams.delete('user');
    setSearchParams(searchParams);
  };

  const handleDeleteAge = () => {
    searchParams.delete('age');
    setSearchParams(searchParams);
  };

  const handleSetCecile = () => {
    navigate('/searchparams?user=Cecile&age=20');
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <h3>useSearchParams examples</h3>
        <div>
          <span>
            <strong>User:</strong> {user}
          </span>
        </div>
        <div>
          <span>
            <strong>Age:</strong> {age}
          </span>
        </div>
        <div className="d-flex justify-content-between mb-3">
          <div>
            <button onClick={handleSetUser} className="btn btn-success me-3">
              Set User: (Alice)
            </button>
          </div>
          <div>
            <button onClick={handleSetAge} className="btn btn-success">
              Set Age: (30)
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <button onClick={handleDeleteUser} className="btn btn-danger me-3">
              Delete User
            </button>
          </div>
          <div>
            <button onClick={handleDeleteAge} className="btn btn-danger">
              Delete Age
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-3">
          <Link className="btn btn-warning me-2" to="?user=Bob&age=40">
            Set User to Bob and Age to 40
          </Link>
          <button onClick={handleSetCecile} className="btn btn-info">
            Set User to Cecile and Age to 20
          </button>
        </div>
      </div>
    </div>
  );
}
