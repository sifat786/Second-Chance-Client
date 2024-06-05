import { Outlet } from "react-router-dom";
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';



const Root = () => {
    return (
        <div>
            <Header/>

            <div className="min-h-[calc(100vh-68px)]">
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    );
};

export default Root;