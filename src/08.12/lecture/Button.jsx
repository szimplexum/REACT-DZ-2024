function Button({ background, text, number }) {
    console.log(number + number);

    const createButtonText = () => {
        return "Gomb";
    };

    return (
        <button
            style={{
                color: "red",
                backgroundColor: background,
            }}
        >
            {text}
        </button>
    );
}

export default Button;
