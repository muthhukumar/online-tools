import CloseIcon from '@material-ui/icons/Close';

const Message = ({ onClose, error = false, content }) => {
    return (
        <div
            className={`${
                error ? 'bg-red-400' : 'bg-green-500'
            } mt-5 py-2 px-4 rounded-full flex justify-between items-center`}
        >
            <div className="text-xl text-white">{content}</div>
            <button
                onClick={onClose}
                className="flex justify-center items-center border-none outline-none"
            >
                <CloseIcon className="text-white ml-3" />
            </button>
        </div>
    );
};

export default Message;
