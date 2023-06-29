import NavBar from './NavBar';
import SectionOne from './SectionOne';
import SectionTwo from './SectionTwo';
import Footer from './Footer';
import './App.css'

import BookPage from './BookPage';
import books from './books';

function App() {
  // console.log(books);
  // const [books, setBooks] = useState(books)
  // Pass the reviews down to the review related component

  return (
    <>
      <NavBar />
      <SectionOne />
      <SectionTwo />
      <Footer /> 
      <BookPage book={books[0]} />
    </>
  );
}

export default App
// newreveiws->db->react