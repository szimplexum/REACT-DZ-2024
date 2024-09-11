import Card from "./Card.jsx";
import ImageCatalog from "./ImageCatalog.jsx";
import ImageCatalogBonus from "./ImageCatalogBonus.jsx";
import LongText from "./LongText.jsx";
import LongText2 from "./LongText2.jsx";
import MyForm from "./MyForm.jsx";
import RemovableList from "./RemovableList.jsx";
import ValidateRegistration from "./ValidateRegistration.jsx";
import PostList from "./PostList.jsx";

function App() {
    const list = [
        { id: 1, element: "apple" },
        { id: 2, element: "banana" },
        { id: 3, element: "pear" },
        { id: 4, element: "mango" },
        { id: 5, element: "peach" },
    ];

    return (
        <div id="main-container">
            <PostList />
            <ImageCatalogBonus
                images={[
                    "https://eu.ui-avatars.com/api/?name=John+Doe&size=250",
                    "https://eu.ui-avatars.com/api/?name=Margot+Robbie&size=250",
                    "https://eu.ui-avatars.com/api/?name=Barack+Obama&size=250",
                    "https://eu.ui-avatars.com/api/?name=Donald+Trump&size=250",
                    "https://eu.ui-avatars.com/api/?name=Joe+Biden&size=250",
                    "https://eu.ui-avatars.com/api/?name=Albert+Einstein&size=250",
                ]}
            />
            <ImageCatalog
                images={[
                    "https://eu.ui-avatars.com/api/?name=John+Doe&size=250",
                    "https://eu.ui-avatars.com/api/?name=Margot+Robbie&size=250",
                    "https://eu.ui-avatars.com/api/?name=Barack+Obama&size=250",
                    "https://eu.ui-avatars.com/api/?name=Donald+Trump&size=250",
                    "https://eu.ui-avatars.com/api/?name=Joe+Biden&size=250",
                    "https://eu.ui-avatars.com/api/?name=Albert+Einstein&size=250",
                ]}
            />
            <ValidateRegistration />
            <MyForm />
            <RemovableList list={list} />
            <LongText
                shortText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ante mattis velit porta convallis sed quis eros."
                longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ante mattis velit porta convallis sed quis eros. Donec faucibus urna ut leo semper, in mattis nunc porta. Nulla gravida congue nisl ut posuere. Phasellus a diam viverra, feugiat nulla eget, sodales dui. Cras tempus gravida odio, non lobortis purus efficitur vel. Sed elementum sed ante et aliquet. Nullam dignissim mollis nisi nec interdum. Nam turpis nisi, interdum at ultrices eu, tempor sed eros. Aliquam sed quam aliquet, rhoncus diam vitae, dictum sem. Praesent non tortor sit amet nulla sollicitudin luctus. Ut quis leo eget lectus faucibus venenatis vel sed libero. Sed vel magna felis. Cras vitae purus eget elit pretium bibendum eu eu diam. Sed auctor cursus sagittis. Phasellus aliquam vel tellus eget feugiat. Aenean pretium egestas tristique."
            />
            <LongText2
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at ante mattis velit porta convallis sed quis eros. Donec faucibus urna ut leo semper, in mattis nunc porta. Nulla gravida congue nisl ut posuere. Phasellus a diam viverra, feugiat nulla eget, sodales dui. Cras tempus gravida odio, non lobortis purus efficitur vel. Sed elementum sed ante et aliquet. Nullam dignissim mollis nisi nec interdum. Nam turpis nisi, interdum at ultrices eu, tempor sed eros. Aliquam sed quam aliquet, rhoncus diam vitae, dictum sem. Praesent non tortor sit amet nulla sollicitudin luctus. Ut quis leo eget lectus faucibus venenatis vel sed libero. Sed vel magna felis. Cras vitae purus eget elit pretium bibendum eu eu diam. Sed auctor cursus sagittis. Phasellus aliquam vel tellus eget feugiat. Aenean pretium egestas tristique."
                wordLimit={10}
            />
            <Card
                imageUrl="https://i.pravatar.cc/200"
                name="John Doe"
                age={28}
                profession="Junior Fullstack API Developer"
                description="A longer description about the persons profession and private life"
            />
            <Card
                imageUrl="https://i.pravatar.cc/200"
                name="John Doe"
                age={28}
                profession="Junior Fullstack API Developer"
                description="A longer description about the persons profession and private life"
            />
            <Card
                imageUrl="https://i.pravatar.cc/200"
                name="John Doe"
                age={28}
                profession="Junior Fullstack API Developer"
                description="A longer description about the persons profession and private life"
            />
        </div>
    );
}

export default App;
