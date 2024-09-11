import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import Form from "./Form";

function App() {
    // const [count, setCount] = useState(0);
    // let secretCount = 0;
    // const refCount = useRef(0);

    // const handleSecretCountIncrement = () => {
    //     secretCount = secretCount + 1;
    //     console.log("secretCount", secretCount);
    // };

    // const handleCountIncrement = () => {
    //     setCount(count + 1);
    // };

    // const handleRefCountIncrement = () => {
    //     refCount.current = refCount.current + 1;
    //     console.log("refCount", refCount.current);
    // };

    // useEffect(() => {
    //     console.log("render");
    // });

    // return (
    //     <div>
    //         <h1>{count}</h1>
    //         <button onClick={handleCountIncrement}>Increment count</button>
    //         <button onClick={handleSecretCountIncrement}>
    //             Increment secret count
    //         </button>
    //         <button onClick={handleRefCountIncrement}>
    //             Increment ref count
    //         </button>
    //     </div>
    // );

    return (
        <>
            <Form />
            <Timer />
        </>
    );
}

export default App;
