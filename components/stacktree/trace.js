import Colors from '../../lib/colors';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';

const Trace = ({
    disabled = false,
    title,
    index,
    description,
    timestamp,
    completed,
    markAsIncomplete,
    markAsComplete,
    length,
    id,
}) => {
    return (
        <div
            className={`border-l-4 ${
                Colors[index % length]
            } my-3 px-2 bg-white w-full rounded rounded-r-lg flex-col items-start`}
        >
            {!disabled && (
                <div className="capitalize text-lg py-1 flex items-center justify-between text-gray-800">
                    <div>{title}</div>
                    {completed === 'completed' ? (
                        <button onClick={() => markAsIncomplete(id)}>
                            <CancelIcon className="text-gray-500" />
                        </button>
                    ) : (
                        <button onClick={() => markAsComplete(id)}>
                            <CheckCircleOutlineIcon className="text-gray-500" />
                        </button>
                    )}
                </div>
            )}
            <div className="bg-blue-100 p-1 rounded-lg break-words">
                {description}
            </div>
            {!disabled && (
                <div className="text-xs my-1 flex items-center justify-between text-gray-500">
                    <div>{timestamp}</div>
                    <div
                        className={`${
                            completed === 'completed'
                                ? 'text-green-400'
                                : 'text-red-400'
                        }`}
                    >
                        {completed}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Trace;
