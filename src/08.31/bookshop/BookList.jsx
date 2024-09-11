import { useState, useEffect } from "react";
import Book from "./Book.jsx";

function BookList() {
    const [books, setBooks] = useState([]);
    const [titleInput, setTitleInput] = useState("");
    const [showReadOnly, setShowReadOnly] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then((response) => response.json())
            .then((booksData) => setBooks(booksData));
    }, []);

    const onTitleChange = (event) => setTitleInput(event.target.value);
    const onShowReadOnlyChange = (event) =>
        setShowReadOnly(event.target.checked);

    const changeReadStatus = (id) => {
        setBooks(
            books.map((book) =>
                book.id === id
                    ? {
                          ...book,
                          read: !book.read,
                      }
                    : book
            )
        );

        books.forEach((book) => {
            if (book.id === id) {
                const updatedBook = {
                    ...book,
                    read: !book.read,
                };

                fetch(`http://localhost:3000/books/${id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedBook),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                    .then((response) => console.log("PUT ok: ", response.ok))
                    .catch((error) => console.error(error.message));
            }
        });
    };

    return (
        <div>
            <h2>Books</h2>

            <input
                type="text"
                placeholder="Search by title..."
                value={titleInput}
                onChange={onTitleChange}
            />

            <input
                type="checkbox"
                checked={showReadOnly}
                onChange={onShowReadOnlyChange}
            />

            {books
                .filter((book) =>
                    book.title
                        .toLocaleLowerCase()
                        .includes(titleInput.toLocaleLowerCase())
                )
                .filter((book) =>
                    showReadOnly ? book.read === showReadOnly : true
                )
                .map((book) => (
                    <Book
                        key={book.id}
                        title={book.title}
                        price={book.price}
                        read={book.read}
                        onReadClicked={() => changeReadStatus(book.id)}
                    />
                ))}
        </div>
    );
}

export default BookList;
