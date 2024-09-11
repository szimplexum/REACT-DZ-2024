import Welcome from "./Welcome.jsx";
import Card from "./Card.jsx";
import ListItem from "./ListItem.jsx";
import Profile from "./Profile.jsx";

function App() {
    const user = {
        name: "John Doe",
        imageUrl: "https://thispersondoesnotexist.com",
    };

    return (
        <>
            <Welcome name="John" />
            <Welcome name="Jane" />
            <Welcome name="Jack" />
            <Card title="Kártya címe" description="Kártya leírása" />
            <Card title="Kártya címe" description="Kártya leírása" />
            <ul>
                <ListItem item="Lista 1" />
                <ListItem item="Lista 2" />
                <ListItem item="Lista 3" />
            </ul>
            <Profile user={user} />
        </>
    );
}

export default App;
