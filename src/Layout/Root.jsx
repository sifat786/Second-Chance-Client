import { Outlet } from "react-router-dom";
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';



const Root = () => {
    return (
        <div>
            <Header/>

            <Outlet/>
            
            <Footer/>
        </div>
    );
};

export default Root;