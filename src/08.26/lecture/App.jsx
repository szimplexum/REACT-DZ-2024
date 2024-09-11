import Counter from "./Counter.jsx";
import PostList from "./PostList.jsx";
import { useState } from "react";
import WindowSize from "./WindowSize.jsx";

function App() {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <>
            <WindowSize />
            {showCounter && <Counter />}
            <button onClick={() => setShowCounter(!showCounter)}>
                Toggle counter
            </button>
            <PostList />
        </>
    );
}

export default App;
