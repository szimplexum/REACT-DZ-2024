import { useState } from "react";

function RemovableList({ list }) {
    const [displayedList, setDisplayedList] = useState(list);

    const handleDelete = (id) =>
        setDisplayedList(displayedList.filter((elem) => elem.id !== id));

    return (
        <div className="removable-list">
            {displayedList.map((elem) => (
                <div key={elem.id}>
                    {elem.element}{" "}
                    <button onClick={() => handleDelete(elem.id)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
}

export default RemovableList;
