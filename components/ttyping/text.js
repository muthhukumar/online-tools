const Text = ({ color, content, isWrong }) => {
    return (
        <span
            className={`${color} ${isWrong &&
                'text-red-400'} py-1 px-3 text-xl rounded-sm`}
        >
            {content}
        </span>
    );
};

export default Text;
