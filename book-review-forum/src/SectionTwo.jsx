import { useState, useEffect } from 'react';
import Book from './Book';
//import books from './books';

export default function SectionTwo() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    let ignore = false;
    async function fetchBooks() {
      const response = await fetch('http://localhost:3000/books');
      const book = await response.json();
      console.log(book)
      if (!ignore) {
        setBooks(book);
      }
      return book;
    }

    fetchBooks();

    return () => {
      ignore = true;
    }
  }, []);

  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
      {bookLayout}
    </div>
  );
}