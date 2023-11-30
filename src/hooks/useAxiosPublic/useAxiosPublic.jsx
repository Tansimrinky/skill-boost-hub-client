import axios from "axios"

export const axiosPublic = axios.create({
    baseURL: 'https://skill-boost-hub-server.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;