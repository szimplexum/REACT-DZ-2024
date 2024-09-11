import { useSearchParams } from 'react-router-dom';

export default function Sorting() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    searchParams.set('_sort', e.target.value);
    searchParams.set('_page', 1);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <label htmlFor="sort">Sort By:</label>
      <select
        className="form-select mb-2"
        name="sort"
        id="sort"
        value={searchParams.get('_sort') || 'burgerName'}
        onChange={handleSortChange}
      >
        <option value="burgerName">A-Z</option>
        <option value="-burgerName">Z-A</option>
        <option value="price">Cheapest</option>
        <option value="-price">Expensive</option>
      </select>
    </div>
  );
}
