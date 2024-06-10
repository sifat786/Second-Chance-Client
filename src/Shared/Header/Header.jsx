import React from "react";
import {Navbar,Button,IconButton,Collapse} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo.png';
import ThemeToggle from './../../components/ThemeToogle';
import useAuth from "@/Hooks/useAuth";
import { Typography, Menu, MenuHandler, MenuList, MenuItem, Avatar,} from "@material-tailwind/react";
import {UserCircleIcon, ChevronDownIcon, PowerIcon,} from "@heroicons/react/24/solid";
import userDefaultPic from '../../assets/userDefaultPic.png';


const Header = () => {

    const {user, logOut} = useAuth();

    const [openNav, setOpenNav] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-bold text-lg text-[#075f47] border-b-4 border-[#075f47]"
                                : "font-semibold text-lg text-black"
                            } 
                            to="/"
                >Home</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-bold text-lg text-[#075f47] border-b-4 border-[#075f47]"
                                : "font-semibold text-lg text-black"
                            } 
                            to="/petListing"
                >Pet Listing</NavLink>
            </li>
            <li>
                <NavLink className={({ isActive }) =>
                            isActive
                                ? " font-bold text-lg text-[#075f47] border-b-4 border-[#075f47]"
                                : "font-semibold text-lg text-black"
                            } 
                            to="/donationCampaigns"
                >Donation Campaigns</NavLink>
            </li>
        </ul>
    );

    return (
        <Navbar className="sticky top-0 z-20 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-0">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link
                    to={'/'}
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    <img src={logo} className="w-full h-12 md:h-20 "/>
                </Link>
                <div className="flex items-center gap-2 md:gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div className="flex items-center gap-1 md:gap-3">

                        <ThemeToggle></ThemeToggle>

                        {/* //! Dropdown: */}
                        {
                            user ?
                            <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                <MenuHandler>
                                    <Button
                                        variant="text"
                                        color="blue-gray"
                                        className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto bg-gray-300"
                                    >
                                        <Avatar
                                            variant="circular"
                                            size="sm"
                                            alt="tania andrew"
                                            className="border-2 border-gray-900 p-0.5"
                                            referrerPolicy="no-referrer"
                                            src={user ? user.photoURL : userDefaultPic}
                                        />
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                                        />
                                    </Button>
                                </MenuHandler>
                                <MenuList className="p-1">
                                    <Link to={'/dashboard'}>
                                        <MenuItem className="flex items-center gap-2 rounded">
                                            <UserCircleIcon className="h-4 w-4" strokeWidth={2} />
                                            <Typography as="span" variant="h6" className="font-medium">Dashboard</Typography>
                                        </MenuItem>
                                    </Link>
                                    <MenuItem
                                        onClick={logOut}
                                        className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    >
                                        <PowerIcon className="h-4 w-4 text-red-500" strokeWidth={2} />
                                        <Typography as="span" variant="h6" className="font-medium" color="red">Sign Out</Typography>
                                    </MenuItem>
                                </MenuList>
                            </Menu>
                            :
                            <Link to={'/login'}>
                                <Button
                                    size="md"
                                    className="hidden lg:inline-block bg-[#075f47] font-bold text-md"
                                >
                                    <span>Sign In</span>
                                </Button>
                            </Link>
                        }
                    </div>
                    
                    <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                    >
                    {openNav ? (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    ) : (
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    )}
                    </IconButton>
                </div>
            </div>

            <Collapse open={openNav}>
                {navList}
                <div>
                    {
                        !user &&
                        <Link to={'/login'}>
                            <Button size="sm" className="w-full md:w-auto md:px-24 bg-[#075f47] font-bold text-md">
                                <span>Sign In</span>
                            </Button>
                        </Link>
                    }
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header;