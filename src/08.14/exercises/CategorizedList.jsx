// {
//     Fruits: ['apple', 'banana'],
//     Vegetables: ['carrot', 'broccoli'],
//     Snacks: []
// }

function CategorizedList({ categories }) {
    const categoryItems = Object.keys(categories).map((category, index) => {
        return (
            <div key={index}>
                <h2>{category}</h2>
                {categories[category].length > 0 ? (
                    <ul>
                        {categories[category].map((item, idx) => {
                            return <li key={idx}>{item}</li>;
                        })}
                    </ul>
                ) : (
                    <p>No items in this category</p>
                )}
            </div>
        );
    });

    return <div className="categorized-list">{categoryItems}</div>;
}

export default CategorizedList;
