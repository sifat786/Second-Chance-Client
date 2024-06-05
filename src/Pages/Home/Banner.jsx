import { Link } from "react-router-dom";
import banner from '../../assets/banner.jpg';


const Banner = () => {
  return (

    <div className="container lg:flex lg:flex-row-reverse  mb-12 md:mb-10 lg:my-12">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-black dark:text-white lg:text-4xl">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h2>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>

                <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <Link to={'/register'} className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-[#075f47] rounded-md">Get Started</Link>
                    <a href="#" className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-[rgba(7,95,72,0.8)] transition-colors duration-300 transform bg-[rgba(7,95,72,0.2)] rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                </div>
            </div>
        </div>

        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full h-full bg-cover rounded-lg" style={{backgroundImage: `url(${banner})`}}>
                <div className="w-full h-full bg-black opacity-25 rounded-lg"></div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
