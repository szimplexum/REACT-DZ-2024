export default function BurgerList({ burgers }) {
  return (
    <div className="row">
      <table className="table table-striped table-hover">
        <thead className="table-primary">
          <tr>
            <th>Burger</th>
            <th>Price</th>
            <th>kcal</th>
            <th>Ingredients</th>
          </tr>
        </thead>
        <tbody>
          {burgers?.map((burger) => (
            <tr key={burger.burgerName}>
              <td>{burger.burgerName}</td>
              <td>{burger.price}</td>
              <td>{burger.calories}</td>
              <td>{burger.ingredients}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
