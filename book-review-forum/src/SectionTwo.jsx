import Book from './Book';
import books from './books';

export default function SectionTwo() {
  const bookLayout = books.map((book, i) => {
    return <Book book={book} key={i} />;
  });

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-items-center pt-14'>
      {bookLayout}
    </div>
  );
}