import Exercise2Solution from '../exercises/Exercise2Solution';
import Exercise1Solution from '../exercises/Exercise1Solution';
import PizzaOrderForm from './PizzaOrderForm';

export default function App() {
  return (
    <div>
      <h2>Órai form</h2>
      <PizzaOrderForm />
      <hr />
      <h2>Első feladat megoldása</h2>
      <Exercise1Solution />
      <hr />
      <h2>2-10 feladatok megoldása + Bootstrap</h2>
      <hr />
      <Exercise2Solution />
    </div>
  );
}
