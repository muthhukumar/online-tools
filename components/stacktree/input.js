const Input = ({ title, Icon, value, onChange }) => {
    return (
        <div className="border bg-white w-10/12 mx-auto flex border-r-4 border-teal-400 border-l-4 my-2 py-3 px-2 items-center justify-between rounded-lg">
            <Icon fontSize="large" />
            <input
                placeholder={title}
                value={value}
                onChange={onChange}
                className="w-full focus:outline-none text-lg py-1 px-2"
            />
        </div>
    );
};

export default Input;
