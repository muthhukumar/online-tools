const Text = ({ content, isWrong }) => {
    return <div className={`${isWrong && 'text-red-400'}`}>{content}</div>;
};

export default Text;
