// DRY - Don't Repeat Yourself

function ListItem({ item, isChecked }) {
    return (
        <li className="item">
            {isChecked && "✅"} {item}
        </li>
    );
}

export default ListItem;
