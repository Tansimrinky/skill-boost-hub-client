import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Partnership from "../../Components/Partnership/Partnership";
import BestCourses from "../../Components/BestCourses/BestCourses";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || Home</title>
            </Helmet>
            <Banner></Banner>
            <Partnership></Partnership>
            <BestCourses></BestCourses>
            
        </div>
    );
};

export default Home;