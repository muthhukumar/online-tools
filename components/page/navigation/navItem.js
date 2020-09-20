import Icon from './icon';

const NavItem = ({ highlight, children }) => {
    return (
        <div
            className={`text-lg ${highlight &&
                'bg-teal-100'} mx-1 flex items-center my-1 py-2 px-2 hover:bg-teal-100 rounded-lg`}
        >
            {children}
        </div>
    );
};

export default NavItem;
