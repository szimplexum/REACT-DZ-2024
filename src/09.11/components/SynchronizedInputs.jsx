import { Form } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

export default function SynchronizedInputs() {
  const [searchParams, setSearchParams] = useSearchParams();
  const input1Value = searchParams.get('input1');
  const input2Value = searchParams.get('input2');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    searchParams.set(name, value);
    setSearchParams(searchParams);
  };

  return (
    <Form>
      <Form.Group>
        <Form.Label>Input 1</Form.Label>
        <Form.Control type="text" name="input1" value={input1Value} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Input 2</Form.Label>
        <Form.Control type="text" name="input2" value={input2Value} onChange={handleInputChange} />
      </Form.Group>
    </Form>
  );
}
