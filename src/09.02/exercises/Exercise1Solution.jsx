import { useState } from 'react';

export default function Exercise1Solution() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div>
      <form>
        <label htmlFor="name2">
          Name
          <input
            type="text"
            name="name"
            id="name2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
      {isSubmitted && <p>{name}</p>}
    </div>
  );
}
