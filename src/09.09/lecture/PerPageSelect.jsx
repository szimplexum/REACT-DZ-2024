import { useSearchParams } from 'react-router-dom';

export default function PerPageSelect() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePerPageChange = (e) => {
    searchParams.set('_per_page', e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <label htmlFor="per_page">Per Page</label>
      <select
        className="form-select"
        name="per_page"
        id="per_page"
        value={searchParams.get('_per_page') || '5'}
        onChange={handlePerPageChange}
      >
        <option value="3">3</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
    </div>
  );
}
