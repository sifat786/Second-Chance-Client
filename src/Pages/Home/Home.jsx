import { Helmet } from "react-helmet-async";
import PetCategory from "./Category/PetCategory";
import CTA from "./CTA/CTA";
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";
import Question from "./Question/Question";
import NewsLetter from "./NewsLetter/NewsLetter";



const Home = () => {

    

    return (
        <div className="container">
            <Helmet>
                <title>Second Chance | Home</title>
            </Helmet>

            <Banner/>
            <PetCategory/>
            <CTA/>
            <AboutUs/>
            <Question/>
            <NewsLetter/>
        </div>
    );
};

export default Home;