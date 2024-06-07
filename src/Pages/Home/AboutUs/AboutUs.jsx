import about1 from '../../../assets/about1.jpg';
import about2 from '../../../assets/about2.jpg';
import about3 from '../../../assets/about3.jpg';



const AboutUs = () => {
    return (
        <div className="text-center p-8">
            <h2 className="text-2xl lg:text-[35px] font-semibold mb-5 md:mb-4 leading-10 dark:text-white">About <span className="text-[#075f47]">Us</span></h2>

            <div className="flex flex-wrap items-center mt-10 text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={about1} alt="Adopt a Pet" className="inline-block rounded-lg shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Simple Adoption Process
                    </h3>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">
                        Our streamlined adoption process makes it easy for you to find and bring home a new pet. Browse through profiles, apply online, and connect with your future furry friend in just a few steps.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={about2} alt="Team Collaboration" className="inline-block rounded-lg shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 md:order-first text-center md:text-left lg:pr-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Easy Collaboration
                    </h3>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">
                        Our team collaborates closely with shelters and rescue organizations to ensure every pet gets the attention and care they deserve. We work together to make sure each adoption is a success.
                    </p>
                </div>
            </div>

            <div className="flex flex-wrap items-center mt-20 text-center">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={about3} alt="Pet Safety" className="inline-block rounded-lg shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <h3 className="font-bold mt-8 text-xl md:mt-0 sm:text-2xl">
                        Commitment to Safety
                    </h3>
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 lg:text-base">
                        We ensure that all pets are properly vetted and healthy before they are listed for adoption. Our thorough screening process helps create a safe and happy environment for both pets and their new families.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
