// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/bundle";
// import { Navigation, Autoplay } from 'swiper/modules';



// const Banner = () => {
//     return (
//         <div className="mt-6 md:mt-10">
//             <Swiper
//                 navigation = {true} 
//                 modules = {[Navigation, Autoplay]}
//                 loop = {true}
//                 autoplay = {
//                     {delay: 20000}
//                 }
//             >
//                 <SwiperSlide>
//                     <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/7YsdxmD/b2.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
//                         <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
//                         <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
//                         <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/FqxdpXS/b3.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
//                         <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
//                         <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
//                         <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/f1Jpkjq/b1.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
//                         <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
//                         <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
//                         <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
//                     </div>
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/SxxnXq8/b4.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                    
//                         <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
//                         <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
//                         <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
//                     </div>
//                 </SwiperSlide>
                
//             </Swiper>
//         </div>
//     );
// };

// export default Banner;

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className="mt-6 md:mt-10 relative">
            <Swiper
                navigation={{
                    prevEl: '.custom-swiper-button-prev',
                    nextEl: '.custom-swiper-button-next',
                }}
                modules={[Navigation, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 20000,
                }}
            >
                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/7YsdxmD/b2.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/FqxdpXS/b3.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/f1Jpkjq/b1.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="py-16 md:py-[100px] lg:py-[160px] px-10 lg:px-0 bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('https://i.ibb.co/SxxnXq8/b4.jpg')] bg-cover bg-center bg-no-repeat text-center rounded-lg">
                        <h1 className="w-auto md:w-[400px] lg:w-[550px] m-auto text-white text-[20px] md:text-[30px] lg:text-[40px] font-bold leading-[25px] md:leading-[40px] lg:leading-[50px]">Where Every Pet Finds Their Forever <span className="text-[#075f47]">Home</span></h1>
                        <p className="pt-4 w-auto md:w-[500px] lg:w-[600px] m-auto text-center text-sm  md:text-base text-gray-200 font-medium">At Second Chance, we believe every pet deserves a loving home. Explore our wide range of adoptable pets and discover the joy of giving a second chance to a furry friend in need. Join our community of pet lovers and make a difference today!</p>
                        <button className="bg-transparent border-2 mt-8 py-2 px-4 md:py-[9px] md:px-11 text-white md:text-xl font-medium rounded-lg">Learn More</button>
                    </div>
                </SwiperSlide>
                
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="custom-swiper-button-prev absolute top-1/2 transform -translate-y-1/2 left-4 z-10 cursor-pointer bg-white text-black rounded-full p-1">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </div>
            <div className="custom-swiper-button-next absolute top-1/2 transform -translate-y-1/2 right-4 z-10 cursor-pointer bg-white text-black rounded-full p-1">
                <svg className="w- h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </div>
        </div>
    );
};

export default Banner;