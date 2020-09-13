const Quest = ({ title, count }) => {
    return (
        <div className="text-gray-700 flex flex-col items-center justify-center py-2 px-1">
            <div className="font-bold text-center text-lg">{count}</div>
            <h2 className="capitalize text-gray-400">{title}</h2>
        </div>
    );
};

export default Quest;
