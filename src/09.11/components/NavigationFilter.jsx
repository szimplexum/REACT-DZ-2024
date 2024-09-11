import { Button, ButtonGroup } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export default function NavigationFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categories = ['Books', 'Movies', 'Music'];

  const handleCategorySelect = (category) => {
    searchParams.set('category', category);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        {categories.map((category) => (
          <Button key={category} variant="secondary" onClick={() => handleCategorySelect(category)}>
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <div>Selected Category: {searchParams.get('category') || 'None'}</div>
    </div>
  );
}
