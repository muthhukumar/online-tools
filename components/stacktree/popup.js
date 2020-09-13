import TitleIcon from '@material-ui/icons/Title';
import DescriptionIcon from '@material-ui/icons/Description';

import Input from './input';

const Popup = ({
    title,
    description,
    onTitleChange,
    onDescrptionChange,
    onCancel,
    onAdd,
}) => {
    return (
        <div className="max-w-3xl mx-auto rounded rounded-t-lg shadow-lg py-4 fixed w-screen h-64 inset-x-0 bottom-0 bg-white">
            <Input
                title="Title"
                value={title}
                Icon={TitleIcon}
                onChange={onTitleChange}
            />
            <Input
                title="Description"
                value={description}
                Icon={DescriptionIcon}
                onChange={onDescrptionChange}
            />
            <div className="w-10/12 mx-auto flex justify-end items-center">
                <button
                    onClick={onCancel}
                    className="focus:border-red-600 focus:text-red-600 focus:outline-none border-r-4 border rounded-lg border-gray-400 py-3 font-semibold text-red-400 text-xl w-1/2 uppercase border-l-4 border-red-300"
                >
                    cancel
                </button>
                <button
                    onClick={onAdd}
                    className="focus:border-teal-600 focus:text-teal-600 focus:outline-none border-r-4 border rounded-lg border-gray-400 py-3 font-semibold text-teal-400 text-xl w-1/2 ml-2 uppercase border-l-4 border-teal-400"
                >
                    add
                </button>
            </div>
        </div>
    );
};

export default Popup;
