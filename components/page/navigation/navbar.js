import Link from 'next/link';
import { useRouter } from 'next/router';

import NavItem from './navItem';

const Navbar = () => {
    const pathName = useRouter().route;
    const route = pathName.substring(1, pathName.length);
    return (
        <nav className="hidden md:flex text-gray-600 px-2 ">
            <NavItem highlight={route === ''}>
                <Link href="/">
                    <a className="w-full inline-block">Home</a>
                </Link>
            </NavItem>
            <NavItem highlight={route === 'stacktree'}>
                <Link href="/stacktree">
                    <a className="w-full inline-block">StackTree</a>
                </Link>
            </NavItem>
            <NavItem highlight={route === 'timeline'}>
                <Link href="/timeline">
                    <a className="w-full inline-block">Timeline</a>
                </Link>
            </NavItem>
            <NavItem highlight={route === 'harvester'}>
                <Link href="/harvester">
                    <a className="w-full inline-block">Harvester</a>
                </Link>
            </NavItem>
        </nav>
    );
};

export default Navbar;
