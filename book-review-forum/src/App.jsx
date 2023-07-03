import NavBar from './NavBar';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Footer from './Footer';
import './App.css'

import BookPage from './BookPage';
import { useState, useEffect } from 'react';

function App() {

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


  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <Footer /> 
      <BookPage book={books} />
    </>
  );
}

export default App
// newreveiws->db->react