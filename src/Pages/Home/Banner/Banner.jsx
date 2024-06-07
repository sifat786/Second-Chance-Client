import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './custom-pagination.css';

const Banner = () => {
    return (
        <div className="mt-6 md:mt-10 lg:mt-16 relative">
            <Swiper
                 pagination={{ el: '.custom-pagination', clickable: true }}
                modules={[ Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 20000,
                }}
            >
                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('https://i.ibb.co/7YsdxmD/b2.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-2xl md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Find Your <span className="text-[#075f47]">Companion</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm md:text-base text-gray-200 font-medium">Discover the joy of pet adoption and bring home a loyal companion. Explore our diverse selection of pets ready to join your family.</p>
                        <a href="#faq">
                            <button className="bg-transparent border-2 border-white mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('https://i.ibb.co/FqxdpXS/b3.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-2xl md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Find Your Forever <span className="text-[#075f47]">Friend</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm md:text-base text-gray-200 font-medium">Our mission is to connect loving families with pets in need. Browse our adoption listings and find a pet who needs your love and care. Adopt today!</p>
                        <a href="#faq">
                            <button className="bg-transparent border-2 border-white mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('https://i.ibb.co/f1Jpkjq/b1.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-2xl md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Adopt a Pet, Save a <span className="text-[#075f47]">Life</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm md:text-base text-gray-200 font-medium">Every pet deserves a second chance at happiness. By adopting, you are saving a life and gaining a new family member. Explore our pets today.</p>
                        <a href="#faq">
                            <button className="bg-transparent border-2 border-white mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.7)),url('https://i.ibb.co/SxxnXq8/b4.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-2xl md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Bring Joy to Your <span className="text-[#075f47]">Home</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm md:text-base text-gray-200 font-medium">Adding a pet to your family brings joy and companionship. Find the perfect pet to complete your family at Second Chance. Start your adoption journey now.</p>
                        <a href="#faq">
                            <button className="bg-transparent border-2 border-white mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                        </a>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            <div className="swiper-pagination custom-pagination"></div>
            
        </div>
    );
};

export default Banner;