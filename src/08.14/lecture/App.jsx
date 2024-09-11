import ListItem from "./ListItem.jsx";

function App() {
    const listItemData = [
        { id: 1, itemName: "Első elem", completed: true },
        { id: 2, itemName: "Második elem", completed: false },
        { id: 3, itemName: "Harmadik elem", completed: true },
        { id: 4, itemName: "Negyedik elem", completed: true },
    ];

    return (
        <ul>
            {listItemData
                .filter((listItem) => listItem.completed)
                .map((listItem) => (
                    <ListItem
                        key={listItem.id}
                        item={listItem.itemName}
                        isChecked={listItem.completed}
                    />
                ))}
        </ul>
    );
}

export default App;
