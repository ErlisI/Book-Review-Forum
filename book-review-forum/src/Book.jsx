import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';


export default function Book({ book }) {
  // pull data from argument
  const { image, author, title, id } = book; // Destructure the 'books' object


  return (
    <>
      <div className='grid justify-items-center pb-14'>

        <div className='b-Image relative hover:-translate-y-1 hover:scale-105 duration-300'> {/* To Save the book */}
          <Link to={`books/${id}`}>
            <img className='object-contain h-80 mb-2' src={image.src} alt={image.src} /> {/* Access image properties */}
            <div className='overlay'></div>
          </Link>

          <div className='b-Star absolute top-0 right-0 invisible z-10'>
            <a href="">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffeb3b" className="w-6 h-6 mx-auto mb-4 hover:fill-yellow-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h2 className='text-gray-600 whitespace-normal'>{author}</h2> {/* Access Author */}
        </div>

        <div>
          <h1 className='text-2xl text-type-of-red'>{title}</h1> {/* Access title */}
        </div>
      </div>

    </>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};