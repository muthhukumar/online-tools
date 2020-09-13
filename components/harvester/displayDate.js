const DisplayDate = () => {
    return (
        <div className="flex mb-2 py-4 justify-center items-center">
            <div className="text-4xl text-gray-800"> Harvester</div>
            <span className="h-12 w-px bg-gray-600 text-white mx-2">|</span>
            <time className="text-3xl text-center text-gray-600">
                {new Date().toDateString()}
            </time>
        </div>
    );
};

export default DisplayDate;
