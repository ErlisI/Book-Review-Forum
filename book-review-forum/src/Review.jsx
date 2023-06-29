import PropTypes from 'prop-types';

export default function Review({ review }) {

    const { name, rating, comment } = review;

    return (
        <div className="antialiased mx-auto max-w-screen-sm mb-16 mt-5">

            <div className="space-y-4">

                <div className="flex">
                    <div className="flex-shrink-0 mr-3">
                        <img className="mt-2 rounded-full w-8 h-8 sm:w-10 sm:h-10" src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" alt=""></img>
                    </div>
                    <div className="flex-1 border rounded-lg px-4 py-2 sm:px-6 sm:py-4 leading-relaxed">
                        <div className='flex pb-5'>
                            <strong className='text-lg'>{name}</strong> <span className="text-gray-400 text-sm pl-5 pt-1">mm/dd/yyyy</span>

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
                        {/* <div className="mt-4 flex items-center">
                            <div className="flex -space-x-2 mr-2">
                                <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""></img>
                                <img className="rounded-full w-6 h-6 border border-white" src="https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt=""></img>
                            </div>
                            <div className="text-sm text-gray-500 font-semibold">
                                5 Replies
                            </div>
                        </div> */}
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
        })
    ).isRequired,
};