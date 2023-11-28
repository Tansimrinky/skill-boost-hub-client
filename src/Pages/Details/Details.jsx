import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCourses from "../../hooks/useCourses/useCourses";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Details = () => {
  const [singleCourse, setSingleCourse] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [courses] = useCourses();
  console.log(courses);

  useEffect(() => {
    const findCourseDetails = courses.filter((course) => course._id === id);
    if(findCourseDetails){
        setSingleCourse(findCourseDetails)
        console.log(findCourseDetails)
    }
  }, [courses, id]);
  console.log(singleCourse)
  return (
    <div>
        {
          singleCourse.map(course => <DetailsCard key={course._id} course={course}></DetailsCard> )  
        }
    </div>
  )
};

export default Details;
