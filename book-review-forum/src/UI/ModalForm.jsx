import PropTypes from 'prop-types';

export default function ModalForm({ isVisible, hideModal, children }) {
    if (!isVisible)
        return null;

    return (
        <div onClick={hideModal} className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-items-center items-center">
            <div onClick={(e) => e.stopPropagation()} className="max-w-xl w-144 mx-auto flex flex-col">
                <button
                    onClick={hideModal}
                    className="text-white text-xl ml-auto pb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </button>
                <div className="bg-white text-gray-800 p-20 rounded-lg">
                    {children}
                </div>
            </div>
        </div>
    )
}

ModalForm.propTypes = {
    isVisible: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};