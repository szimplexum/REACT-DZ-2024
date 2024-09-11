function ItemListWithMessage({ items }) {
    return items.length == 0 ? (
        <p>No items available</p>
    ) : (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

export default ItemListWithMessage;
