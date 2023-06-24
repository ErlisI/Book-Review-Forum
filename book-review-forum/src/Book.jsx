import { PropTypes } from 'prop-types';

  export default function Book({ book }) {
    // pull data from argument
    const { image, Author, title } = book; // Destructure the 'books' object

    return (
        <div className='grid justify-items-center pb-14 hover:-translate-y-1 duration-300'>
            <img className='object-contain w-80 h-80' src={image.src} alt={image.alt} /> {/* Access image properties */}
            <div>
                <h2 className='text-gray-600 whitespace-normal'>{Author}</h2> {/* Access Author */}
            </div>
            <div>
                <h1 className='text-2xl text-type-of-red'>{title}</h1> {/* Access title */}
            </div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.shape({
      image: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
      }),
      Author: PropTypes.string,
      title: PropTypes.string
    }).isRequired
};