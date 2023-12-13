import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Partnership from "../../Components/Partnership/Partnership";
import BestCourses from "../../Components/BestCourses/BestCourses";
import TeachingToday from "../../Components/TeachingToday/TeachingToday";
import Reviews from "../../Components/Reviews/Reviews";
import Information from "../../Components/Information/Information";
import Help from "../../Components/Help/Help";
import TopCategory from "../../Components/TopCategory/TopCategory";
import Contact from "../../Components/Contact/Contact";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || Home</title>
            </Helmet>
            <Banner></Banner>
            <Partnership></Partnership>
            <BestCourses></BestCourses>
            <Reviews></Reviews>
            <Information></Information>
            <Help></Help>
            <TopCategory></TopCategory>
            <TeachingToday></TeachingToday>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;