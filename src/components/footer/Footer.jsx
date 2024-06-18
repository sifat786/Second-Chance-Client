// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className='bg-white rounded-lg shadow dark:bg-gray-900'>
//       <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
//         <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
//           © 2024{" "}
//           <Link to='/' className='hover:underline'>
//             AnimalCarings™
//           </Link>
//           . All Rights Reserved.
//         </span>
//         <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
//           <li>
//             <a href='#' className='hover:underline me-4 md:me-6'>
//               About
//             </a>
//           </li>
//           <li>
//             <a href='#' className='hover:underline me-4 md:me-6'>
//               Privacy Policy
//             </a>
//           </li>
//           <li>
//             <a href='#' className='hover:underline me-4 md:me-6'>
//               Licensing
//             </a>
//           </li>
//           <li>
//             <a href='#' className='hover:underline'>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import logo from '../../assets/logo.png';
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-500">
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