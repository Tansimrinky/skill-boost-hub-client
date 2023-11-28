import { FaShareAlt } from "react-icons/fa";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { Link } from "react-router-dom";


const AllClassesCard = ({ course }) => {
  const {
    _id,
    title,
    name,
    image,
    price,
    short_description,
    total_enrollment,
    instructor_name,
    instructor_image,
  } = course || {};
  return (
    <div>
      <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl">
        <figure>
          <img className="h-64"
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex justify-between items-center">
          <p>Course Name: {name}</p>
          <div className="flex gap-1 ">
          <FaShareAlt />
          <AiFillLike />
          <AiFillDislike />
          </div>
          </div>
          <div className="flex justify-between items-center gap-16 ">
            <div className="flex items-center gap-2">
            <img className="h-[30px] w-[30px] rounded-full" src={instructor_image} alt="" />
           <div> <p> {instructor_name}</p></div>
            </div>
            <p>Total Enrollment: {total_enrollment}</p>
          </div>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
            <p>Price: ${price}</p>
            <Link to={`/course/${_id}`}><button className="btn bg-blue-500 text-white">Enroll Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllClassesCard;
