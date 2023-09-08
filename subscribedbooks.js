import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscribedBooks = ({ userId }) => {
  const [subscribedBooks, setSubscribedBooks] = useState([]);

  useEffect(() => {
    // Fetch subscribed books for the logged-in user using their userId
    axios.get(`http://localhost:3001/users/${userId}/subscribedBooks`)
      .then((response) => {
        setSubscribedBooks(response.data);
      })
      .catch((error) => {
        console.error("Error fetching subscribed books: ", error);
      });
  }, [userId]);

  return (
    <div>
      <h2>Subscribed Books</h2>
      <ul>
        {subscribedBooks.map((book) => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubscribedBooks;
