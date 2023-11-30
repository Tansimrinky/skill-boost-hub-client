import { useEffect, useState } from "react";
import useAxiosSecure, { axiosSecure } from "../../hooks/useAxiosSecure/useAxiosSecure";
import useEnrollClasses from "../../hooks/useEnrollClasses/useEnrollClasses";
import useCourses from "../../hooks/useCourses/useCourses";
import { FaUsers } from "react-icons/fa";


const Information = () => {
    const axiosSecure = useAxiosSecure()
    const [ enrollClass ] = useEnrollClasses()
    const [user, setUser] = useState([]);
    const [ courses] = useCourses()
     useEffect( () => {
        axiosSecure.get('/users')
        .then(data => {
            setUser(data.data)
        })
       
    }, [axiosSecure])
    return (
        <div className="flex gap-2">
            <div className="flex justify-between border-black  gap-6 text-white font-bold">
                 <div className="bg-blue-500  p-10 ">Total User: {user.length} <br />
                 </div>
                 <div className="bg-blue-500 p-10 ">Total Courses:{courses.length}</div>
                 <div  className="bg-blue-500  p-10 "> Total Enrolled Classes:{enrollClass.length}</div>
            </div>
            <div>
                 <img src="https://i.ibb.co/rZVGN9T/360-F-220324914-Vms-F3xm-THtji6u-KOll-Jxe0qlem1-QGXvb.jpg" alt="" />
            </div>
        </div>
    );
};

export default Information;