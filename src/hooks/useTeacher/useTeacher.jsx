import { useQuery } from "@tanstack/react-query";


import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";


const useTeacher = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const axiosSecure = useAxiosSecure();
    const { data: isTeacher, isPending: isTeacherLoading } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/teacher/${user.email}`);
            console.log(res.data);
            return res.data?.teacher;
        }
    })
    return [isTeacher, isTeacherLoading]
};

export default useTeacher;