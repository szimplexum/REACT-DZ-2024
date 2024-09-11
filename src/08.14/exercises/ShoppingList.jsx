// {
//     name: "Krumpli",
//     bought: true
// }

function ShoppingList({ items }) {
    if (items.length <= 0) {
        return <p>A lista üres</p>;
    }

    return (
        <ul>
            {items.map((item, index) => {
                // const style = item.bought ? { color: "green" } : {};

                return (
                    <li
                        key={index}
                        style={{ color: item.bought ? "green" : "" }}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
}

export default ShoppingList;
