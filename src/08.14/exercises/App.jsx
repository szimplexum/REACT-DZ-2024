import CategorizedList from "./CategorizedList.jsx";
import Greeting from "./Greeting.jsx";
import ItemList from "./ItemList.jsx";
import ItemListWithMessage from "./ItemListWithMessage.jsx";
import Navigation from "./Navigation.jsx";
import RoleBasedMessage from "./RoleBasedMessage.jsx";
import ShoppingList from "./ShoppingList.jsx";

function App() {
    const shoppingListItems = [
        {
            name: "Krumpli",
            bought: true,
        },
        {
            name: "Répa",
            bought: false,
        },
        {
            name: "Brokkoli",
            bought: false,
        },
    ];

    return (
        <>
            <Greeting isMorning={true} />
            <Greeting isMorning={false} />
            <ItemList items={["apple", "watermelon", "plum", "peach"]} />
            <ItemListWithMessage
                items={["apple", "watermelon", "plum", "peach"]}
            />
            <ItemListWithMessage items={[]} />
            <RoleBasedMessage role="admin" />
            <RoleBasedMessage role="user" />
            <RoleBasedMessage role="kiskutya" />
            <ShoppingList items={[]} />
            <ShoppingList items={shoppingListItems} />
            <Navigation role="admin" />
            <Navigation role="user" />
            <Navigation role="guest" />
            <CategorizedList
                categories={{
                    Fruits: ["apple", "banana"],
                    Vegetables: ["carrot", "broccoli"],
                    Snacks: [],
                }}
            />
        </>
    );
}

export default App;
