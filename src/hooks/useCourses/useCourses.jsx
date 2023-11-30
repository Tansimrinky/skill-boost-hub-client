import { useEffect, useState } from "react";


const useCourses = () => {
    const [courses, setCourses ] = useState([]);
    const [ loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://skill-boost-hub-server.vercel.app/courses')
        .then(res => res.json())
        .then(data => {
            setCourses(data);
            setLoading(false)
        })
    }, [])
    return [courses, loading]
};

export default useCourses;