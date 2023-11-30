import {   useContext} from "react"
import { useParams } from 'react-router-dom';
import {useState } from "react"
import useAssignment from "../../hooks/useAssignment/useAssignment";
import EnrollClassDetailsCard from "../../Components/EnrollClassDetailsCard/EnrollClassDetailsCard";
import { FaPlus } from "react-icons/fa6";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const EnrollClassDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext)
  const { id } = useParams();
  console.log(id);
  const [assignment] = useAssignment();
  console.log(assignment);
  const [rating, setRating] = useState(0)

  const findAssignment = assignment.filter((assign) => assign.title === id);
  console.log(findAssignment);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleReview = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const description = form.get("description");
    const Rating = rating;
    const name = user.displayName;
    const image = user.photoURL;
    const title = id;
    const reviewInfo = {
        description: description,
        Rating: Rating,
        name: name,
        image: image,
        title: title

    }
    axiosPublic.post('/reviews', reviewInfo)
    .then(data => {
        console.log(data)
    })
    
  }

  return (
    <div>
      <p className="font-bold text-3xl text-center">
        Course Assignment Outline
      </p>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-blue-500 text-white m-5"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        <FaPlus /> Teaching Evaluation Report (TER)
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action">
            <form onSubmit={handleReview} method="dialog">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-3xl">
                    What do you Think About this Course
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-3xl">
                    Give us Rating
                  </span>
                </label>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
                ,
              </div>
              {/* if there is a button in form, it will close the modal */}
              <input className="btn bg-blue-500 text-white" type="submit" value="Send" />
            </form>
          </div>
        </div>
      </dialog>
      {findAssignment.map((info) => (
        <EnrollClassDetailsCard
          key={info._id}
          info={info}
        ></EnrollClassDetailsCard>
      ))}
    </div>
  );
};

export default EnrollClassDetails;
