import NavBar from "./NavBar";
import Footer from "./Footer";
import ModalForm from "./UI/Modal";
import PropTypes from 'prop-types';
import { useState } from "react";

export default function BookPage({ book }) {

  const {
    image: { src, alt },
    author,
    title,
    genre,
    publisher,
    desc,

  } = book

  const [isModalVisible, setIsModalVisible] = useState(false);

  const visibleTrue = () => {
    setIsModalVisible(true);
  }

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

            {!isModalVisible ? (
            <button onClick={visibleTrue} className="mt-4 bg-transparent text-gray-50 font-semibold py-2 px-4 border hover:bg-gray-50 hover:text-type-of-red border-gray-50 rounded">
              Write A Review
            </button>
            ) : (console.log("hello")
            )}
          </div>

          <div className='w-4/12 mx-auto whitespace-normal text-center text-gray-50 max-w-full'>
            <p className="text-xl">{desc}</p>
          </div>

        </div>
      </div>

      <ModalForm isVisible={isModalVisible} />

      <Footer />

    </>
  );
}

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
  }).isRequired,
};