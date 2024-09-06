import React, { useEffect, useState } from 'react';
import { getBook, updateBook, deleteBook } from '../api';

const BookDetail = ({ match }) => {
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      const response = await getBook(match.params.id);
      setBook(response.data);
    };
    fetchBook();
  }, [match.params.id]);

  const handleUpdate = async () => {
    const updatedBook = { ...book, title: 'Updated Title' };
    await updateBook(book._id, updatedBook);
    setBook(updatedBook);
  };

  const handleDelete = async () => {
    await deleteBook(book._id);
    // Redirect or update UI after deletion
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.author}</p>
      <p>{book.price}</p>
      <p>{book.description}</p>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookDetail;
