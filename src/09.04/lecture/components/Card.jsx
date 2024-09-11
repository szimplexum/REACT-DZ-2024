export default function Card({ title, text, imageUrl, timeAgo, listItems }) {
  return (
    <div className="card p-0" style={{ width: '18rem' }}>
      <div className="card-header">Styling</div>
      <div className="card-body">
        <img className="card-img-top rounded" src={imageUrl} alt="exampleImg" />
        <h5 className="card-title mt-2">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-primary me-2">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
      </div>
      <ul className="list-group list-group-flush">
        {listItems.map((listItem) => (
          <li className="list-group-item">{listItem}</li>
        ))}
      </ul>
      <div className="card-footer text-body-secondary">{timeAgo}</div>
    </div>
  );
}
