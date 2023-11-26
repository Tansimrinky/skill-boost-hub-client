import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Partnership from "../../Components/Partnership/Partnership";
import BestCourses from "../../Components/BestCourses/BestCourses";
import TeachingToday from "../../Components/TeachingToday/TeachingToday";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || Home</title>
            </Helmet>
            <Banner></Banner>
            <Partnership></Partnership>
            <BestCourses></BestCourses>
            <TeachingToday></TeachingToday>
            
        </div>
    );
};

export default Home;