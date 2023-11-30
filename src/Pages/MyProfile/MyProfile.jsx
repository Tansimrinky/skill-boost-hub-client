import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure/useAxiosSecure";


const MyProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();

    const [userInfo, setUserInfo] = useState([])

    useEffect( () => {
        axiosSecure.get('/users')
        .then(data => {
            setUserInfo(data.data)
        })
    }, [axiosSecure])
    const users = userInfo.filter(us => us.email === user.email )
    console.log(users)
    return (
        <div>
            <h2 className="text-5xl font-bold text-center">Profile</h2>
            <div>
                <div  className="flex justify-center"><img className="h-[300px] w-[200px]" src={user.photoURL} alt="" /></div>
                <p className="text-center font-bold ">Name: {user.displayName}</p>
                <p className="text-center font-bold ">Email Address: {user.email}</p>
                {
                    users.map(user => <div key={user._id} user={user}>
                          <p className="text-center font-bold ">Phone Number: {user.phone}</p>
                          <p className="text-center font-bold ">Role: 
                            {
                                user.role === "admin" ? "Admin" : user.role === "teacher" ? "Teacher" : "Student"
                            }
                          </p>
                    </div> )
                }
            </div>
        </div>
    );
};

export default MyProfile;