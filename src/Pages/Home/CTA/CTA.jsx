/* eslint-disable react-refresh/only-export-components */
import { Link } from "react-router-dom";
import cta from '../../../assets/cta.jpg';


const CTA = () => {
    return (
        <div className="lg:flex mb-12 md:mb-10 lg:my-12">
            <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
                <div className="max-w-xl">
                    <h2 className="text-2xl lg:text-[35px] font-semibold mb-5 md:mb-4 leading-10 dark:text-white">Start Your Adoption Journey <span className="text-[#075f47]">Today!</span></h2>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">Ready to welcome a new furry (or feathered, or scaly) friend into your home? Click below to begin the adoption process and meet your perfect companion. Our simple and user-friendly adoption process ensures that every pet finds a loving and responsible owner. Don&apos;t wait—your new best friend is just a click away. By adopting, you&apos;re not just giving a pet a home; you&apos;re making a lifelong friend and saving a life. Join our community of pet lovers and make a difference today. Adopt, don&apos;t shop!</p>

                    <div className="mt-6 w-fit">
                        <Link to={'/register'} className="block px-5 py-3 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-[#075f47] rounded-md">Get Started</Link>
                    </div>
                </div>
            </div>

            <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                <div className="w-full h-full bg-cover rounded-lg" style={{backgroundImage: `url(${cta})`}}>
                    <div className="w-full h-full bg-black opacity-25 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
};

export default CTA;