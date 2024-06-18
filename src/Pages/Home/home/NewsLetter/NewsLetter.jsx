


const NewsLetter = () => {
    return (
        <div className="mt-0 mb-10 md:mt-20 md:mb-14 px-5">
            <div className="py-10 md:py-14 lg:py-16 px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.9)),url('https://i.ibb.co/kDGZYTc/newsletter.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-2xl md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Stay connected with our <span className="text-[#075f47]">Newsletter</span></h1>
                <p className="mt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm text-gray-200 dark:text-gray-400 lg:text-base font-medium">Subscribe to our newsletter to stay up-to-date with the latest news, events, and adorable pet stories. Join our community of pet lovers and never miss out on opportunities to make a difference in the lives of animals in need</p>

                <div className="flex justify-center">
                    <form className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row ">
                        <input  
                            type="email" 
                            placeholder="Email Address"
                            name='email'
                            className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" 
                            required
                        />

                        <input 
                            type='submit' 
                            value='Subscribe' 
                            className="px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#075f47] rounded-lg lg:w-auto lg:mx-4 focus:outline-none focus:bg-black cursor-pointer"
                        />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default NewsLetter;