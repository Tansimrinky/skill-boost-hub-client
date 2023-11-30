import { useContext, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure"
import { AuthContext } from "../../Provider/AuthProvider";

const EnrollClassDetailsCard = ({ info }) => {
  const axiosSecure =  useAxiosSecure();
  const { user } = useContext(AuthContext)
    const { title , 
        assignments
        } = info
        
const [submissionStatus, setSubmissionStatus] = useState({});


 const handleAssignment = (assignment) => {
      const AssignmentInfo = {
        StudentName: user.displayName,
        studentImage: user.photoURL,
        studentEmail: user.email,
        assignmentDetails: {
          title: assignment.title,
        },
      } 

      setSubmissionStatus((prevStatus) => ({
        ...prevStatus,
        [assignment.assignment_id]: 'success',
      }));


      console.log(AssignmentInfo)
      axiosSecure.post("/submission", AssignmentInfo)
      .then(data => {
        console.log(data)
      })
 }

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-slate-200">
              <th></th>
              <th>{title}</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {assignments.map((task, index) => (
              <tr key={task.assignment_id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{task.title}</td>
                <td>December 2, 2023</td>
                <td>
                  {submissionStatus[task.assignment_id] === 'success' ? (
                    <span className="text-green-500">✔</span>
                  ) : (
                    <button onClick={() => handleAssignment(task)} className="btn bg-blue-500 text-white">
                      Submit
                    </button>
                  )}
                </td>
                {/* <td>
                  {submissionStatus === 'success' ? (
                    <span className="text-green-500">✔</span>
                  ) : (
                    <button onClick={() => handleAssignment(task)} className="btn bg-blue-500 text-white">
                      Submit
                    </button>
                  )}
                </td> */}
                {/* <td>
                  <button onClick={() => handleAssignment(task)} className="btn bg-blue-500 text-white">Submit</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrollClassDetailsCard;
