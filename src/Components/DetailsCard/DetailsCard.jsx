import { Link } from "react-router-dom";

const DetailsCard = ({ course }) => {
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
    instructor_email,
  } = course || {};
  return (
    <div className="h-screen">
      <div className="card card-side  bg-base-100 ">
        <figure>
          <img
          className=""
            src={image}
            alt="Movie"
          />
        </figure>
        <div className="card-body font-medium ">
          <h2 className="card-title text-4xl text-blue-800">{title}</h2>
          <p className="text-blue-500">Name Of course: <span className="text-slate-700">{name}</span></p>
          <p className="text-blue-500">Detailed Information: <span className="text-slate-700"> {short_description}</span></p>
          <div className="flex justify-between">
            <p className="text-blue-500">Price:$ <span className="text-slate-700">{price}</span></p>
            <p className="text-blue-500">Total Enrollment: <span className="text-slate-700">{total_enrollment}</span></p>
          </div>
          <div className="">
            <div><p className="text-blue-500 mb-2">Teacher Information:</p></div>
            <div className="flex gap-5">
                <img className="h-[100px] w-[100px]" src={instructor_image} alt="" />
                <div >
                <p>Name: {instructor_name}</p>
                <p>Contact Email: {instructor_email}</p>
                </div>
            </div>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/dashboard/payment/${_id}`}><button className="btn bg-blue-500 text-white font-bold ">Pay</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
