import { Link } from "react-router-dom";

const MyEnrollCard = ({ course }) => {
  const { title, TeacherName, image, _id } = course;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>Teacher Name: {TeacherName}</p>
          <Link to={`/dashboard/my-enroll-class/${title}`}>
            <div className="card-actions justify-end">
              <button className="btn bg-blue-500 text-white">Continue</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEnrollCard;
