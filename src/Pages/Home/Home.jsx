import React from "react";
import Banner from "./home/banner/Banner";
import CTA from '../home/home/CTA/CTA';
import AboutUs from '../home/home/AboutUs/AboutUs';
// import Question from '../home/home/Question/Question';
import NewsLetter from '../home/home/NewsLetter/NewsLetter';
import PetCategory from '../home/home/Category/PetCategory';

const Home = () => {
  return (
    <div className='container bg-white dark:bg-gray-900'>

        <Banner/>
        <PetCategory/>
        <CTA/>
        <AboutUs/>
        {/* <Question/> */}
        <NewsLetter/>

    </div>
  );
};

export default Home;
