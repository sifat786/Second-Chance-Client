import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import PetCategory from "./Category/PetCategory";



const Home = () => {

    

    return (
        <div className="container">
            <Helmet>
                <title>Second Chance | Home</title>
            </Helmet>
            
            <Banner/>
            <PetCategory/>
        </div>
    );
};

export default Home;