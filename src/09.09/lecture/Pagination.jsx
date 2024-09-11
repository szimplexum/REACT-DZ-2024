import { useSearchParams } from 'react-router-dom';

export default function Pagination({ page, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePrevious = () => {
    if (page > 1) {
      searchParams.set('_page', page - 1);
      setSearchParams(searchParams);
    }
  };

  const handleNext = () => {
    if (page < totalPages) {
      searchParams.set('_page', page + 1);
      setSearchParams(searchParams);
    }
  };

  return (
    <div>
      <button onClick={handlePrevious} disabled={page === 1} className="btn btn-primary me-2">
        Previous
      </button>
      <strong>
        Page {page} of {totalPages}
      </strong>
      <button onClick={handleNext} disabled={page === totalPages} className="btn btn-primary ms-2">
        Next
      </button>
    </div>
  );
}
