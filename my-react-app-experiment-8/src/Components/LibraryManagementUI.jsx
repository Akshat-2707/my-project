// src/components/LibraryManagementUI.jsx
import React, { useState } from "react";

const LibraryManagementUI = () => {
  // State to hold books
  const [books, setBooks] = useState([
    { title: "1984", author: "George Orwell" },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  // Add a new book
  const addBook = () => {
    if (newTitle.trim() && newAuthor.trim()) {
      setBooks([...books, { title: newTitle, author: newAuthor }]);
      setNewTitle("");
      setNewAuthor("");
    }
  };

  // Remove a book by index
  const removeBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  // Filter books by search term
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Library Management</h2>

      <input
        type="text"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", marginBottom: "10px", padding: "5px" }}
      />

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="New book title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={{ marginRight: "5px", padding: "5px" }}
        />
        <input
          type="text"
          placeholder="New book author"
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          style={{ marginRight: "5px", padding: "5px" }}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      {filteredBooks.map((book, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "5px",
            border: "1px solid #ccc",
            padding: "5px",
          }}
        >
          <strong>{book.title}</strong> by {book.author}
          <button onClick={() => removeBook(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default LibraryManagementUI;
