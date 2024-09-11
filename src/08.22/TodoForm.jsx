import { useState } from "react";

function TodoForm({ onTodoCreated }) {
    const [todoInputText, setTodoInputText] = useState("");
    const [showError, setShowError] = useState(false);

    const handleTodoInputChange = (event) => {
        setTodoInputText(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        if (todoInputText.length > 0) {
            setShowError(false);
            onTodoCreated(todoInputText);
            setTodoInputText("");
        } else {
            setShowError(true);
        }
    };

    return (
        <>
            <form id="todo" onSubmit={submitHandler}>
                <input
                    type="text"
                    name="todo-input"
                    id="todo-input"
                    value={todoInputText}
                    onChange={handleTodoInputChange}
                />
                <input type="submit" value="Create" />
            </form>
            {showError && (
                <p style={{ color: "red" }}>
                    Can't create todo if input is empty
                </p>
            )}
        </>
    );
}

export default TodoForm;
