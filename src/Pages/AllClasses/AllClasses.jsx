import { Helmet } from "react-helmet-async";
import useCourses from "../../hooks/useCourses/useCourses";
import AllClassesCard from "../../Components/AllClassesCard/AllClassesCard";

const AllClasses = () => {
    const [courses] = useCourses()
    console.log(courses)
    return (
        <div>
            <Helmet>
                <title>SkillBoost Hub || All CLasses</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:p-6">
                {
                    courses.map(course => <AllClassesCard key={course._id} course={course}></AllClassesCard> )
                }
            </div>
        </div>
    );
};

export default AllClasses;