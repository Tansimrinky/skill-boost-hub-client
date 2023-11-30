import { useContext } from "react";
import useEnrollClasses from "../../hooks/useEnrollClasses/useEnrollClasses";
import { AuthContext } from "../../Provider/AuthProvider";
import MyEnrollCard from "../../Components/MyEnrollCard/MyEnrollCard";

const MyEnrollClass = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [enrollClass] = useEnrollClasses();
  const findMyEnrollClass = enrollClass.filter(
    (course) => course.email === user.email
  );

  return (
    <div>
      <h2 className="text-5xl m-5 text-center">Your Enrolled Courses</h2>
      <div className="grid grid-cols-1 gap-10">
        {findMyEnrollClass.map((course) => (
          <MyEnrollCard key={course._id} course={course}></MyEnrollCard>
        ))}
      </div>
    </div>
  );
};

export default MyEnrollClass;
