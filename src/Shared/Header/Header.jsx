import React from "react";
import {Navbar,Button,IconButton,Collapse} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../../src/assets/logo.png';



const Header = () => {

    const [openNav, setOpenNav] = React.useState(false);
 
    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
    
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
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <div>
                        <Button
                            size="md"
                            className="hidden lg:inline-block bg-[#075f47] font-bold text-md"
                        >
                            <span>Sign in</span>
                        </Button>
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
                    <Button size="sm" className="w-full md:w-auto md:px-24 bg-[#075f47] font-bold text-md">
                        <span>Sign in</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default Header;