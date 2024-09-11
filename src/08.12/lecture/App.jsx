import Profile from "./Profile.jsx";
import Button from "./Button.jsx";
import Wrapper from "./Wrapper.jsx";

function App() {
    return (
        <>
            <Profile />
            <Button text="Gomb 1" background="white" number={1} />
            <Button text="Gomb 2" background="black" number={2} />
            <Button text="Gomb 3" background="yellow" number={3} />
            <Wrapper>
                <h1>Page title</h1>
            </Wrapper>
            <Wrapper>
                <ul>
                    <li>Listaelem</li>
                </ul>
            </Wrapper>
        </>
    );
}

export default App;
