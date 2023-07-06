import PropTypes from 'prop-types';
import { useState } from "react";

const initialReviewFormState = {
    name: "",
    rating: 0,
    email: "",
    comment: "",
};

export default function ReviewForm({ hideModal, bookId }) {

    const [reviewFormState, setReviewFormState] = useState(initialReviewFormState);

    const handleInputChange = (e) => {
        setReviewFormState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleAddReviewFormSubmit = async (e) => {
        e.preventDefault();
        setReviewFormState(initialReviewFormState);
        hideModal();
        window.location.reload();

        const preparedReview = {
            ...reviewFormState,
            bookId: bookId, // Use the bookId value directly
            img: {
                src: "", // Provide the image source
                alt: "", // Provide the image alt text
            },
        };

        const response = await fetch("http://localhost:3000/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(preparedReview),
        });
        const savedReview = await response.json();
        console.log('Saved Review', savedReview);
    };

    return (
        <div className="container mx-auto md:px-3">
            <section className="text-center">
                <div className="mx-auto max-w-[700px] md:px-3">
                    <form onSubmit={handleAddReviewFormSubmit}>
                        <div>
                            <input
                                onChange={handleInputChange}
                                value={reviewFormState.name}
                                type="text"
                                name="name" // Add the name attribute to identify the input
                                id="name"
                                className="my-4 shadow-sm w-full p-3 border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block"
                                placeholder="Full Name"
                                required
                            />
                        </div>

                        <div>
                            <input
                                onChange={handleInputChange}
                                value={reviewFormState.email}
                                type="email"
                                name="email" // Add the name attribute to identify the input
                                id="email"
                                className="my-4 block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-700 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Email"
                                required
                            />
                        </div>

                        <div>
                            <input
                                onChange={handleInputChange}
                                value={reviewFormState.rating}
                                type="number"
                                name="rating" // Add the name attribute to identify the input
                                id="rating"
                                className="my-4 shadow-sm w-full p-3 border text-center border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block"
                                placeholder="Rating"
                                min="0"
                                max="5"
                                required
                            />
                        </div>

                        <div className="sm:col-span-2">
                            <textarea
                                onChange={handleInputChange}
                                value={reviewFormState.comment}
                                name="comment" // Add the name attribute to identify the textarea
                                id="comment"
                                rows="6"
                                className="m4-y block p-3 w-full text-sm border border-gray-700 text-gray-900 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Leave A Comment..."
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            data-te-ripple-init
                            className="mb-6 mt-6 inline-block border border-gray-700 hover:text-type-of-red hover:border-type-of-red  rounded-lg px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    )
}

ReviewForm.propTypes = {
    onAddReview: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    bookId: PropTypes.func.isRequired
};