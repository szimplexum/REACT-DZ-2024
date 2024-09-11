import { useState } from "react";

function DynamicList() {
    const [list, setList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddClick = () => {
        const newList = [...list, inputValue];
        setList(newList);
        setInputValue("");
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const deleteItem = (itemToDelete) => {
        const newList = list.filter((item) => item !== itemToDelete);
        setList(newList);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            <button onClick={handleAddClick}>Add</button>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li onClick={() => deleteItem(item)} key={index}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default DynamicList;
