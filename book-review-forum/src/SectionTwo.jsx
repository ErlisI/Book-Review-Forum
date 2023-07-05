import { useState } from 'react';
import Book from './Book';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const response = await fetch('http://localhost:3000/books');
  const books = await response.json();
  return { books };
}

export default function SectionTwo() {
  const [books, setBooks] = useState([]);

  const loadBooks = async () => {
    const { books } = await loader();
    setBooks(books);
  };

  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });

  // Load books when the component mounts
  useState(() => {
    loadBooks();
  }, []);

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
      {bookLayout}
    </div>
  );
}