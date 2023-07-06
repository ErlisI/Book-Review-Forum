import PropTypes from 'prop-types';
import deleteReview from './deleteReview';

export default function Review({ review }) {

    // eslint-disable-next-line react/prop-types
    const { name, rating, comment, img: { src, alt } } = review;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();

    const handleDeleteReview = async () => {
        try {
            await deleteReview({ params: review.id });
            window.location.reload();
            console.log('Review deleted successfully.');

        } catch (error) {
            console.log('Failed to delete the review:', error.message);
        }
    };

    return (
        <div className="antialiased mx-auto max-w-screen-sm mb-16 mt-5">

            <div className="space-y-4">

                <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                        <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src={src} alt={alt}></img>
                    </div>
                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <div className='flex pb-5'>
                            <strong className='text-lg'>{name}</strong> <span className="text-gray-400 text-sm pl-5 pt-1">{formattedDate}</span>

                            <div className="flex justify-center ml-auto">
                                {Array.from({ length: 5 }, (_, index) => (
                                    <svg
                                        key={index}
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill={index < rating ? '#e9e14b' : 'none'}
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        <p className="text-sm">
                            {comment}
                        </p>
                        <button className="text-red-500 hover:text-red-700" onClick={handleDeleteReview}>
                            Delete Review
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

Review.propTypes = {
    review: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
            comment: PropTypes.string.isRequired,
            img: PropTypes.shape({
                src: PropTypes.string.isRequired,
                alt: PropTypes.string.isRequired,
            }).isRequired,
        })
    ).isRequired,
};  
