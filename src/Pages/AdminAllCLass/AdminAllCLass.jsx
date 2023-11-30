import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AdminAllCLass = () => {
  const axiosSecure = useAxiosSecure();
  const [reqClass, setReqCLass] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    axiosSecure.get("/addClass").then((data) => {
      console.log(data.data);
      setReqCLass(data.data);
    });
  }, [axiosSecure]);

  const handleAddClass = async (course) => {
   delete course._id

    axiosSecure.post("/courses", course).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Good job!",
          text: "Class Approved Successfully!",
          icon: "success",
        });
        setStatus("Approved")
      }
    });
  };

  const handleReject = () => {
    setStatus("rejected");
    Swal.fire({
      title: "Rejected!",
      icon: "success",
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Short Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {/* row 1 */}
            {reqClass.map((course) => (
              <tr key={course._id} course={course}>
                <th>
                  <img src={course.image} alt="" />
                </th>
                <td>{course.title}</td>
                <td>{course.instructor_email}</td>
                <td>{course.short_description}</td>
                <td>{status === "Approved"
                    ? "Approved"
                    : status === "rejected"
                    ? "rejected"
                    : "Pending"}</td>
                <td>
                  <div>
                    <button
                      onClick={() => handleAddClass(course)}
                      className="btn bg-green-600 text-white"
                    >
                      Approve
                    </button>
                    <button onClick={handleReject} className="btn bg-red-600 text-white">
                      reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAllCLass;
