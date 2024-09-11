import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getBurgersData } from './getBurgers';
import BurgerList from './BurgerList';
import Sorting from './Sorting';
import PerPageSelect from './PerPageSelect';
import Pagination from './Pagination';

export default function BurgerApp() {
  const [burgers, setBurgers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get('_page') || 1);
  const perPage = Number(searchParams.get('_per_page') || 5);
  const sort = searchParams.get('_sort') || 'burgerName';

  useEffect(() => {
    getBurgersData(page, perPage, sort).then((data) => setBurgers(data));
  }, [page, perPage, sort]);

  return (
    <div className="container mt-4">
      <h2>Burger Menu</h2>
      <div className="d-flex justify-content-between">
        <Sorting />
        <PerPageSelect />
      </div>
      <div>
        <BurgerList burgers={burgers?.data} />
      </div>
      <Pagination page={page} totalPages={burgers.last} />
    </div>
  );
}
