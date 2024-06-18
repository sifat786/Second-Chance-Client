import logo from '../../assets/logo.png';
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-500">
        <div className="px-2 md:px-8 py-8">
            <div className="flex flex-col items-center text-center">
                <a href="#">
                    <img className="w-auto h-14" src={logo} alt="logo" />
                </a>

                <div className="flex flex-wrap justify-center mt-6 -mx-4">
                    <a href='/#categories' className="mx-4 font-semibold text-md text-gray-600 transition-colors duration-300 hover:text-[#075f47] dark:text-gray-900 dark:hover:text-[#075f47]" aria-label="Reddit"> Categories </a>
                    <a href='/#cta' className="mx-4 font-semibold text-md text-gray-600 transition-colors duration-300 hover:text-[#075f47] dark:text-gray-900 dark:hover:text-[#075f47]" aria-label="Reddit"> CTA </a>
                    <a href='/#about' className="mx-4 font-semibold text-md text-gray-600 transition-colors duration-300 hover:text-[#075f47] dark:text-gray-900 dark:hover:text-[#075f47]" aria-label="Reddit"> About </a>
                    <a href='/#faq' className="mx-4 font-semibold text-md text-gray-600 transition-colors duration-300 hover:text-[#075f47] dark:text-gray-900 dark:hover:text-[#075f47]" aria-label="Reddit"> FAQ </a>
                </div>

            </div>

            <hr className="my-6 border-[#075f47] border-opacity-60 md:my-10 dark:border-gray-700" />

            <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-900">© Copyright 2024. All Rights Reserved.</p>

                <div className="flex -mx-2 mt-3 md:mt-0">
                    <a href="https://x.com" target='_blank' className="mx-2 text-gray-600 text-lg transition-colors duration-300 dark:text-gray-900 hover:text-[#075f47] dark:hover:text-[#075f47]" aria-label="Reddit">
                      <FaSquareXTwitter/>
                    </a>

                    <a href="https://facebook.com" target='_blank' className="mx-2 text-gray-600 text-lg transition-colors duration-300 dark:text-gray-900 hover:text-[#075f47] dark:hover:text-[#075f47]" aria-label="Facebook">
                      <FaFacebookSquare/>
                    </a>

                    <a href="https://github.com/" target='_blank' className="mx-2 text-gray-600 text-lg transition-colors duration-300 dark:text-gray-900 hover:text-[#075f47] dark:hover:text-[#075f47]" aria-label="Github">
                      <FaGithub/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;