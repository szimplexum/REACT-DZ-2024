function Button({ onButtonClicked }) {
    const handleClick = (event) => {
        console.log(event);
        alert("Meg lett kattintva");

        onButtonClicked("gomb1");
    };

    return <button onClick={handleClick}>Gomb</button>;
}

export default Button;
