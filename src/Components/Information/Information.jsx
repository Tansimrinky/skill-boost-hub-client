import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";
import useEnrollClasses from "../../hooks/useEnrollClasses/useEnrollClasses";
import useCourses from "../../hooks/useCourses/useCourses";
import useUser from "../../hooks/useUser/useUser";



const Information = () => {
    const [ enrollClass ] = useEnrollClasses()
    const [ courses] = useCourses()
    const [users] = useUser()
    return (
        <div className="flex gap-2">
            <div className="flex justify-between border-black  gap-6 text-white font-bold">
                 <div className="bg-blue-500  p-10 ">Total User: {users.length} <br />
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