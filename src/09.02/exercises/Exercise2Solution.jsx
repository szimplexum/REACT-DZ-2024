import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';

const initialFormData = {
  name: '',
  email: '',
  password: '',
  textarea: '',
  country: '',
  isSubscribed: false,
  gender: '',
  state: '',
};

export default function Exercise2Solution() {
  const [formData, setFormData] = useState(initialFormData);
  const [nameError, setNameError] = useState('');

  const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  const handleBlur = () => {
    if (formData.name.length < 3) {
      setNameError('Name must be minimum 3 characters long!');
    } else {
      setNameError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(formData);
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormData(initialFormData);
  };

  return (
    <div className="container">
      <h1 className="mt-5">Form feladatok megoldása: 2-10</h1>
      <div className="row mt-4">
        <div className="col-md-6">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className={`form-control ${nameError ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
              />
              {nameError && <div className="invalid-feedback">{nameError}</div>}
            </div>

            <br />

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <br />

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            <br />

            <div className="form-group">
              <label htmlFor="textarea">Text Area</label>
              <textarea
                className="form-control"
                id="textarea"
                name="textarea"
                placeholder="Enter text..."
                value={formData.textarea}
                onChange={handleInputChange}
              />
            </div>

            <br />

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <select
                className="form-control"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              >
                <option value="">Select country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
              </select>
            </div>

            {formData.country === 'USA' && (
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  placeholder="Enter your state"
                  value={formData.state}
                  onChange={handleInputChange}
                />
              </div>
            )}

            <br />

            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="isSubscribed"
                name="isSubscribed"
                checked={formData.isSubscribed}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="isSubscribed">
                Subscribe to newsletter
              </label>
            </div>

            <br />

            <strong>Select gender:</strong>
            <div className="form-group">
              <div className="form-check">
                <label htmlFor="female">
                  <input
                    type="radio"
                    name="gender"
                    id="female"
                    value="female"
                    className="form-check-input"
                    checked={formData.gender === 'female'}
                    onChange={handleInputChange}
                  />
                  Female
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="male">
                  <input
                    type="radio"
                    name="gender"
                    id="male"
                    value="male"
                    className="form-check-input"
                    checked={formData.gender === 'male'}
                    onChange={handleInputChange}
                  />
                  Male
                </label>
              </div>
            </div>

            <br />

            <div>
              <button className="btn btn-success" type="submit">
                Submit
              </button>
              <button className="m-1 btn btn-warning text-white" onClick={handleReset}>
                Reset
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Form Data</h2>
          <ul className="list-group">
            {Object.entries(formData).map(([key, value]) => (
              <li key={key} className="list-group-item">
                <strong>{key}</strong>: {value.toString()}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
