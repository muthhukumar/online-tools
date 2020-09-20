import Link from 'next/link';

import HomeIcon from '@material-ui/icons/Home';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import TimelineIcon from '@material-ui/icons/Timeline';
import TurnedInNotIcon from '@material-ui/icons/TurnedInNot';
import NavItem from './navItem';
import Icon from './icon';

const Navbar = () => {
    return (
        <nav>
            <NavItem popup>
                <Icon renderIcon={HomeIcon} />
                <Link href="/">
                    <a className="w-full inline-block">Home</a>
                </Link>
            </NavItem>
            <NavItem popup>
                <Icon renderIcon={PlaylistAddIcon} />
                <Link href="/stacktree">
                    <a className="w-full inline-block">StackTree</a>
                </Link>
            </NavItem>
            <NavItem popup>
                <Icon renderIcon={TimelineIcon} />
                <Link href="/timeline">
                    <a className="w-full inline-block">Timeline</a>
                </Link>
            </NavItem>
            <NavItem popup>
                <Icon renderIcon={TurnedInNotIcon} />
                <Link href="/harvester">
                    <a className="w-full inline-block">Harvester</a>
                </Link>
            </NavItem>
        </nav>
    );
};

export default Navbar;
