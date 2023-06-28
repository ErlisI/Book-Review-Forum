import PropTypes from 'prop-types';

export default function ModalForm({ isVisible }) {
    if (!isVisible)
        return null;

    return (
        <div className="container mx-auto md:px-6 pt-5">
            <section className="text-center">
                <div className="mx-auto max-w-[700px] md:px-3">
                    <h2 className="mb-3 text-3xl font-bold">Review The Book</h2>

                    <form>
                        <div>
                            <input type="name" id="name" className="my-4 shadow-sm bg-[#FEF9EF] border border-gray-700 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="Full Name" required></input>
                        </div>
                        <div>
                            <input type="text" id="subject" className="my-4 block p-3 w-full text-sm text-gray-900 bg-[#FEF9EF] rounded-lg border border-gray-700 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Email" required></input>
                        </div>
                        <div className="sm:col-span-2">
                            <textarea id="message" rows="6" className="m4-y block p-2.5 w-full text-sm border border-gray-700 text-gray-900 bg-[#FEF9EF] rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Leave A Comment..."></textarea>
                        </div>
                        <button
                            type="button"
                            data-te-ripple-init
                            className="mb-6 mt-6 inline-block w-1/5 bg-[#FEF9EF] border border-gray-700 hover:text-type-of-red hover:border-type-of-red  rounded-lg px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
                            Send
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

ModalForm.propTypes = {
    isVisible: PropTypes.bool.isRequired,
};