import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";
import useTeacherReq from "../../../hooks/useTeacherReq/useTeacherReq";
import Swal from "sweetalert2";
import { useState } from "react";

const TeacherRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [status, setStatus] = useState("");
  const { data: teachReq = [], refetch } = useQuery({
    queryKey: ["teachReq "],
    queryFn: async () => {
      const res = await axiosSecure.get("/teachReq ");
      console.log(res.data);
      return res.data;
    },
  });

  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log(res.data);
      return res.data;
    },
  });

  const matchedObject = users.filter((user) => {
    return teachReq.find((req) => req.name === user.name);
  });
  console.log(matchedObject[0]?._id);
  const id = matchedObject[0]?._id;
  const handleApprove = (id, req) => {
    axiosSecure.patch(`/users/teacher/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${req.name} is a teacher Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
      setStatus("accepted");
      refetch();
    });
  };

  const handleReject = () => {
    setStatus("rejected");
    refetch();
    Swal.fire({
      title: "Rejected!",
      icon: "success",
    });
  };
  console.log(status);
  return (
    <div>
      <h2 className="font-bold text-3xl text-center">All Teacher Request</h2>
      <h2 className="text-right font-bold">Total Request: {teachReq.length}</h2>
      <div className="overflow-x-auto w-full">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Images</th>
              <th>Name</th>
              <th>Category</th>
              <th>Experience</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="font-medium text-slate-700">
            {teachReq.map((req, index) => (
              <tr key={index} req={req}>
                <th>{index + 1}</th>
                <td>
                  <img src={req.TeacherPhoto} alt="" />
                </td>
                <td>{req.name}</td>
                <td>{req.category}</td>
                <td>{req.experience}</td>
                <td>
                  {status === "accepted"
                    ? "Accepted"
                    : status === "rejected"
                    ? "Need Some changes"
                    : "Pending"}
                </td>

                <td>
                  <div>
                    <button
                      onClick={() => handleApprove(id)}
                      disabled={status === "accepted" || status === "rejected"}
                      className="btn bg-green-600 text-white"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => handleReject()}
                      disabled={status === "accepted" || status === "rejected"}
                      className="btn bg-red-600 text-white"
                    >
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

export default TeacherRequest;
