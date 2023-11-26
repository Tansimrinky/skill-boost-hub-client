import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Partnership from "../../Components/Partnership/Partnership";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || Home</title>
            </Helmet>
            <Banner></Banner>
            <Partnership></Partnership>
            
        </div>
    );
};

export default Home;