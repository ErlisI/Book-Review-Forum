import NavBar from "./NavBar";
import Footer from "./Footer";
import PropTypes from 'prop-types';
import Review from "./Review";
import ModalForm from './UI/ModalForm';
import { useState, useEffect } from "react";
import ReviewForm from "./ReviewForm";

export default function BookPage({ book }) {

  const {
    image: { src, alt },
    author,
    title,
    genre,
    publisher,
    desc,
    reviews: [{ name, rating, comment, bookId }]
  } = book
  // eslint-disable-next-line no-unused-vars
  const [reviews, setReviews] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const onAddReview = (newReview) => {
    hideModal();
    setReviews((prevReviews) => [...prevReviews, newReview]);
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        hideModal();
      }
    };
    console.log("adding event listener");
    window.addEventListener("keydown", handleEscape);
    return () => {
      console.log("removing event listener");
      window.removeEventListener("keydown", handleEscape);
    };
  });

  console.log(name);

  return (
    <>
      <NavBar />
      <div className="bg-type-of-purple pt-32 pb-20">
        <div className="flex mb-40">
          <div className="flex">

            <div className="text-center p-10 ml-5">
              <h2 className='text-2xl text-slate-400'>Genre</h2>
              {genre.split(' ').map((word, index) => (
                <p key={index} className="grid text-gray-50 text-sm">
                  {word}
                </p>
              ))}
            </div>

            <div className="text-center p-10 ml-5">
              <h2 className='text-2xl text-slate-400'>Publisher</h2>
              {publisher.split(' ').map((word, index) => (
                <p key={index} className="grid text-gray-50 text-sm">
                  {word}
                </p>
              ))}
            </div>
          </div>
          <img className='h-full mx-auto' src={src} alt={alt} /> {/* Access image properties */}
        </div>

        <div className="flex flex-row">
          <div className="text-center pl-5">
            <h2 className='text-3xl text-gray-50'>{author}</h2> {/* Access Author */}
            <h1 className='text-6xl text-type-of-red'>{title}</h1> {/* Access title */}

          </div>

          <div className='w-4/12 mx-auto whitespace-normal text-center text-gray-50 max-w-full'>
            <p className="text-xl">{desc}</p>
          </div>

        </div>
      </div>

      <div className="antialiased mx-auto max-w-screen-sm mt-16">
        <div className='text-center'>
          <h3 className="mb-4 text-4xl font-semibold text-gray-900">Reviews</h3>

          <button onClick={showModal} className="bg-transparent hover:bg-type-of-purple text-gray-900 font-semibold hover:text-gray-50 mb-10 py-2 px-4 border border-gray-900 hover:border-transparent rounded">
            Write a Review
          </button>
        </div>

        <ModalForm isVisible={isModalVisible} hideModal={hideModal}>
          <ReviewForm addReview={onAddReview} hideModal={hideModal} bookId={bookId} />
        </ModalForm>

        <Review
          review={{
            name: name,
            rating: rating,
            comment: comment,
          }}
        />

      </div>

      <Footer />

    </>
  );
}

// Prop types validation
BookPage.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    reviews: PropTypes.shape({
      name: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};