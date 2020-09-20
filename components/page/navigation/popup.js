import EcoSharpIcon from '@material-ui/icons/EcoSharp';
import CloseIcon from '@material-ui/icons/Close';
import Navbar from './popupNavbar';

import Icon from './icon';

const Popup = ({ closeModal }) => {
    return (
        <div className="bg-white mx-auto p-4 fixed inset-x-0 top-0 rounded-lg shadow-xs mt-2 w-11/12">
            <div className="py-2 flex items-center justify-between">
                <div className="text-2xl font-bold">
                    <EcoSharpIcon className="text-teal-500" fontSize="large" />
                </div>
                <div onClick={closeModal}>
                    <Icon renderIcon={CloseIcon} />
                </div>
            </div>
            <Navbar />
        </div>
    );
};

export default Popup;
