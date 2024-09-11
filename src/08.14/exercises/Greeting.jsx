function Greeting({ isMorning }) {
    return (
        <h1 className="greeting">
            {isMorning ? "Good morning!" : "Good evening!"}
        </h1>
    );
}

export default Greeting;
