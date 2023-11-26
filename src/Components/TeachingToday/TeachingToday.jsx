import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle/SectionTilte";


const TeachingToday = () => {
    return (
        <div>
            <SectionTitle heading={"Start Teaching Today"}></SectionTitle>
            <div className="md:flex justify-between gap-36">
                <div><img className="h-[300px] w-[500px]" src="https://i.ibb.co/KyZcCmP/start-teaching-today.jpg" alt="" /></div>
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-slate-700">Become an instructor</h2>
                    <p className="text-xl font-medium text-slate-600">Instructors from around the world teach millions <br /> of learners on Udemy. We provide the tools and skills to teach what you love.</p>
                   <Link to="/teach"> <button className="btn bg-slate-900 text-white font-bold mt-4 ">Start teaching today</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TeachingToday;