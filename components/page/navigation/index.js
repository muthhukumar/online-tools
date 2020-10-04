import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import EcoSharpIcon from '@material-ui/icons/EcoSharp';
import MenuOpenSharpIcon from '@material-ui/icons/MenuOpenSharp';

import Popup from './popup';
import Navbar from './navbar';

const MainNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = useRouter().route;
    const route = pathName.substring(1, pathName.length);
    return (
        <div className="mt-2 items-center py-2 px-1 sm:w-full shadow-lg bg-white mx-auto md:w-11/12 flex justify-between border border-gray-200 rounded-lg ">
            <div className="ml-2">
                <Link href="/">
                    <a className="font-bold flex items-center inline-block text-5xl">
                        <EcoSharpIcon
                            className="text-teal-500"
                            fontSize="inherit"
                        />
                    </a>
                </Link>
            </div>
            <div className="md:hidden font-bold text-xl capitalize text-teal-500">
                {route === '' ? 'Home' : route}
            </div>
            <div className="mr-2 text-xl text-teal-500 md:hidden">
                <MenuOpenSharpIcon
                    fontSize="large"
                    onClick={() => setIsOpen(true)}
                />
            </div>
            {isOpen && <Popup closeModal={() => setIsOpen(false)} />}
            <Navbar />
        </div>
    );
};

export default MainNavbar;
