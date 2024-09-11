import { useSearchParams } from 'react-router-dom';
import { Form } from 'react-bootstrap';

export default function SearchQueryInput() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (e) => {
    if (!e.target.value) {
      searchParams.delete('query');
    } else {
      searchParams.set('query', e.target.value);
    }
    setSearchParams(searchParams);
  };

  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Type something..."
        value={searchParams.get('query') || ''}
        onChange={handleInputChange}
      />
    </Form>
  );
}
