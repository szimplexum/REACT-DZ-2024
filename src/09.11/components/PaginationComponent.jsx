import { Pagination } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export default function PaginationComponent() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const setPage = (pageNumber) => {
    searchParams.set('page', pageNumber);
    setSearchParams(searchParams);
  };

  return (
    <Pagination>
      <Pagination.Prev onClick={() => setPage(currentPage - 1)} disabled={currentPage === 1} />
      <Pagination.Item>{currentPage}</Pagination.Item>
      <Pagination.Next onClick={() => setPage(currentPage + 1)} />
    </Pagination>
  );
}
