import { Helmet } from "react-helmet-async";
import PetCategory from "./Category/PetCategory";
import CTA from "./CTA/CTA";
import Banner from "./Banner/Banner";
import AboutUs from "./AboutUs/AboutUs";



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
        </div>
    );
};

export default Home;